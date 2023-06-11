export enum EXTERNAL_ROUTES {
  WEB_APP = 'https://www.invest.nada.co',
  DOWNLOAD = 'https://nada.onelink.me/wNEn/ksbeffng',
  TYPEFORM = 'https://form.typeform.com/to/fv2eTpuT',
  CAREERS = 'https://www.linkedin.com/company/hellonada/jobs/',
  APPLE_STORE = 'https://apps.apple.com/us/app/nada-finance/id1615840472',
  GOOGLE_STORE = 'https://play.google.com/store/apps/details/Nada_Finance?id=com.nada.debitapp',
}

export const UTM_PARAMETERS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'msclkid',
];

export const HEADER_LINKS = [
  { name: 'Cityfunds', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Learn', link: '/learn' },
];

export const LEGAL_LINKS = [
  { name: 'Terms of Use', link: '/terms-conditions' },
  { name: 'Privacy Policy', link: '/privacy-policy' },
  { name: 'Cookie Policy', link: '/cookie-policy' },
  {
    name: 'Electronic Funds Transfer',
    link: '/electronic-funds-transfer',
  },
  {
    name: 'Rewards Program',
    link: '/rewards-program',
  },
  {
    name: 'Consumer Complaint Policy',
    link: 'https://global-uploads.webflow.com/625f180b9d03ad4177055610/6272adeb375b786809b98989_Nada_Consumer_Complaint_Policy.pdf',
  },
  {
    name: 'Nada SEC Filings',
    link: 'https://www.sec.gov/edgar/browse/?CIK=0001801613',
  },
  {
    name: 'Cityfunds SEC Filings',
    link: 'https://www.sec.gov/edgar/search/#/ciks=0001874979&entityName=Cityfunds%2520I%252C%2520LLC%2520(CIK%25200001874979)',
  },
];

export const FOOTER_LINKS = [
  {
    title: 'Home',
    links: [
      { name: 'Cityfunds', link: '/' },
      { name: 'Homeshares', link: '/homeshares' },
      { name: 'Learn', link: '/learn' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About', link: '/about' },
      { name: 'Press', link: '/press' },
      { name: 'FAQs', link: '/faqs' },
      { name: 'Careers', link: EXTERNAL_ROUTES.CAREERS },
    ],
  },
  {
    title: 'Transparency',
    links: LEGAL_LINKS,
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', link: 'https://www.facebook.com/HelloNadaHomes' },
  { name: 'Twitter', link: 'https://twitter.com/nada_finance' },
  { name: 'Instagram', link: 'https://www.instagram.com/nadafinance' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/company/hellonada' },
  { name: 'Discord', link: 'https://discord.com/invite/AGhPSkQjYX' },
  { name: 'TikTok', link: 'https://www.tiktok.com/@nadafinance' },
];

export const FEATURED_CITIES = [
  {
    name: 'Miami',
    heroImage: '/images/miami-hero.png',
    cardImage: '/images/miami.png',
    totalAssets: 9,
    appreciation: 11.42,
  },
  {
    name: 'Dallas',
    heroImage: '/images/dallas-hero.png',
    cardImage: '/images/dallas.png',
    totalAssets: 19,
    appreciation: 10.03,
  },
  {
    name: 'Austin',
    heroImage: '/images/austin-hero.png',
    cardImage: '/images/austin.png',
    totalAssets: 30,
    appreciation: 13.65,
  },
  {
    name: 'Tampa',
    heroImage: '/images/tampa-hero.png',
    cardImage: '/images/tampa.png',
    totalAssets: 3,
    appreciation: 7.85,
  },
];

export const FEATURED_ARTICLES = [
  { name: 'Forbes', imageUrl: '/icons/forbes.svg', link: '' },
  {
    name: 'The Motley Fool',
    imageUrl: '/icons/motley-fool.svg',
    link: '',
  },
  {
    name: 'TechCrunch',
    imageUrl: '/icons/techcrunch.svg',
    link: 'https://techcrunch.com/2022/07/27/you-cant-afford-a-house-but-you-can-probably-afford-nada',
  },
  {
    name: 'Yahoo Finance',
    imageUrl: '/icons/yahoo-finance.svg',
    link: 'https://finance.yahoo.com/news/nada-raises-8-1m-funding-123300648.html',
  },
];

export const FEATURED_BACKERS = [
  {
    name: 'Live Oak',
    imageUrl: '/icons/live-oak.svg',
    link: 'https://liveoakvp.com/',
  },
  {
    name: 'Revolution',
    imageUrl: '/icons/revolution.svg',
    link: 'https://revolution.com/',
  },
  {
    name: 'Capital Factory',
    imageUrl: '/icons/capital-factory.svg',
    link: 'https://www.capitalfactory.com/',
  },
  {
    name: 'Sweater Ventures',
    imageUrl: '/icons/sweater.svg',
    link: 'https://www.sweaterventures.com/',
  },
  {
    name: '7BC Venture Capital',
    imageUrl: '/icons/7bc-ventures.svg',
    link: 'https://www.7bc.vc/',
  },
  {
    name: 'LFG Ventures',
    imageUrl: '/icons/lfg-ventures.svg',
    link: 'https://www.letsfg.com/',
  },
  {
    name: 'Texas Venture Labs',
    imageUrl: '/icons/texas-ventures.svg',
    link: 'https://www.mccombs.utexas.edu/centers-and-initiatives/jon-brumley-texas-venture-labs/',
  },
  {
    name: 'Stonks Fund',
    imageUrl: '/icons/stonks.svg',
    link: 'https://stonks.com/',
  },
];

export const VALUE_PROPS = [
  {
    title: 'Accessibility',
    description:
      'No more heavy restrictions. Own homes in costly high demand cities regardless of where you live or your mortgage qualifications.',
  },
  {
    title: 'Diversification',
    description:
      'Not leveraged against 1 property. Immediate exposure to multiple properties spread across a top city keeping you safe from market movement on a specific home.',
  },
  {
    title: 'Passive Income',
    description:
      'Build a future where your money works for you. You as the savvy investor earn dividends quarterly from earned rental income and home sales.',
  },
  {
    title: 'Liquidity',
    description:
      'Don’t give up years of access to your money. Liquidate your funds by trading your shares.',
  },
  {
    title: 'In the Money',
    description:
      'No more waiting for growth. Your investments are immediately in the money with our 10-15% acquisition discount.',
  },
  {
    title: 'Low Volatility',
    description:
      'No instantaneous spikes or drops like stocks. Real estate is one of the most stable asset classes.',
  },
  {
    title: 'Aligned',
    description:
      'No solo work. We’re a team with vested interest in these same properties as you.',
  },
  {
    title: 'Professionally Managed',
    description:
      'Your investments are managed for you by a team of veterans with 20+ years of experience.',
  },
  {
    title: 'Hassle Free',
    description: 'No heavy lifting. You invest and Nada handles the rest.',
  },
  {
    title: '‍Inflation Protection',
    description:
      'Don’t lose the value of your dollar. Build an iron wall of protection by investing in real estate.',
  },
  {
    title: 'No Personal Liability Risk',
    description:
      'No added debt. Our series LLC business structure protects you from being directly correlated.',
  },
];

export const OUR_VALUES = [
  {
    title: 'Passionate',
    description:
      'We find meaning in what we do by understanding why we are doing it. We fully embrace change and strive to inspire internally and externally with our insights and initiative.',
  },
  {
    title: 'Bold',
    description:
      'We think without the restrictions of how things have always been done. We embrace big problems in a big industry and we are not afraid to create solutions that may change the world.',
  },
  {
    title: 'Customer Obsessed',
    description:
      'We create experiences, not transactions. We are deeply focused on solving our customers’ problems and we constantly seek customer feedback.',
  },
  {
    title: 'Authentic',
    description:
      'We embrace who we are. We break down artificial barriers and build trust-based relationships. We strive to be transparent in delivering the good, the bad, and the ugly.',
  },
];
