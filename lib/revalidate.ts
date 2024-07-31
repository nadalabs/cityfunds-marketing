import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { revalidateQuery, sanityClient } from 'lib/sanity';

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

const CITYFUNDS_QUERY = `*[_type == "cityfundsPage"]`;
const HOMESHARES_QUERY = `*[_type == "homesharesPage"]`;
const ABOUT_QUERY = `*[_type == "aboutPage"]`;
const INVESTORS_QUERY = `*[_type == "investorsPage"]`;
const LEGAL_QUERY = `*[_type == "legal" && _id == $id].slug.current`;
const PARTNER_QUERY = `*[_type == "partner" && _id == $id].slug.current`;
const POST_QUERY = `*[_type == "post" && _id == $id].slug.current`;
const PRESS_QUERY = `*[_type == "press" && _id == $id].title.current`;

const getQueryForType = (type) => {
  switch (type) {
    case 'cityfundsPage':
      return CITYFUNDS_QUERY;
    case 'homesharesPage':
      return HOMESHARES_QUERY;
    case 'aboutPage':
      return ABOUT_QUERY;
    case 'investorsPage':
      return INVESTORS_QUERY;
    case 'legal':
      return LEGAL_QUERY;
    case 'partner':
      return PARTNER_QUERY;
    case 'post':
      return POST_QUERY;
    case 'press':
      return PRESS_QUERY;
    default:
      throw new TypeError(`Unknown type: ${type}`);
  }
};

const log = (msg, error) =>
  console[error ? 'error' : 'log'](`[revalidate] ${msg}`);

async function readBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default async function revalidate(req, res) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const body = await readBody(req); // Read the body into a string
  if (
    !isValidSignature(
      body,
      signature,
      process.env.SANITY_REVALIDATE_SECRET?.trim()
    )
  ) {
    const invalidSignature = 'Invalid signature';
    log(invalidSignature, true);
    res.status(401).json({ success: false, message: invalidSignature });
    return;
  }

  const jsonBody = JSON.parse(body);
  const { _id: id, _type } = jsonBody;
  if (typeof id !== 'string' || !id) {
    const invalidId = 'Invalid _id';
    log(invalidId, true);
    return res.status(400).json({ message: invalidId });
  }

  const _slug = await sanityClient.fetch(
    getQueryForType(_type),
    { id },
    revalidateQuery
  );
  let staleRoutes = [];

  if (_type === 'cityfundsPage') {
    staleRoutes = [`/`, `/${_slug}`];
  } else if (_type === 'homesharesPage') {
    staleRoutes = [`/homeshares`];
  } else if (_type === 'aboutPage') {
    staleRoutes = [`/about`];
  } else if (_type === 'post') {
    staleRoutes = ['/learn', `/learn/${_slug}`];
  } else if (_type === 'legal') {
    staleRoutes = [`/${_slug}`];
  } else if (_type === 'partner') {
    staleRoutes = [`/${_slug}`];
  } else if (_type === 'press') {
    staleRoutes = ['/press'];
  }

  try {
    await Promise.all(staleRoutes.map((route) => res.revalidate(route)));
    const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`;
    return res.status(200).json({ message: updatedRoutes });
  } catch (err) {
    log(err.message, true);
    return res.status(500).json({ message: err.message });
  }
}
