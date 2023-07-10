import {
  FUND_TERM,
  FUND_TYPE,
  LIQUIDITY,
  LOCKUP_PERIOD,
  STRATEGY,
  TAX_FORM,
} from '@utils/models';

export enum EXTERNAL_ROUTES {
  WEB_APP = 'https://invest.nada.co/',
  DOWNLOAD = 'https://nada.onelink.me/wNEn/ksbeffng',
  TYPEFORM = 'https://form.typeform.com/to/fv2eTpuT',
  CAREERS = 'https://www.linkedin.com/company/hellonada/jobs/',
  APPLE_STORE = 'https://apps.apple.com/us/app/nada-finance/id1615840472',
  GOOGLE_STORE = 'https://play.google.com/store/apps/details/Nada_Finance?id=com.nada.debitapp',
  HUBSPOT_MEETING = 'https://meetings.hubspot.com/deyon-robertson/accredited-investors',
  HUBSPOT_FAQS = 'https://meetings.hubspot.com/deyon-robertson/accredited-investors',
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
  'irclickid',
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
    name: 'Rewards Program',
    link: '/rewards-program',
  },
  {
    name: 'Electronic Funds Transfer',
    link: '/electronic-funds-transfer',
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
      // { name: 'Accredited Investors', link: '/accredited-investors' },
      { name: 'Learn', link: '/learn' },
    ],
  },
  {
    title: 'About',
    links: [
      { name: 'About', link: '/about' },
      { name: 'Careers', link: EXTERNAL_ROUTES.CAREERS },
      { name: 'Press', link: '/press' },
      { name: 'FAQs', link: EXTERNAL_ROUTES.HUBSPOT_FAQS },
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
    information: {
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: 15,
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 5000,
      managementFee: 0.25,
      fundSize: 5000000,
    },
    return: {
      sharePrice: 10.77,
      appreciation: 7.7,
      totalAssets: 10,
    },
  },
  {
    name: 'Dallas',
    heroImage: '/images/dallas-hero.png',
    cardImage: '/images/dallas.png',
    information: {
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: 15,
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 5000,
      managementFee: 0.25,
      fundSize: 5000000,
    },
  },
  {
    name: 'Austin',
    heroImage: '/images/austin-hero.png',
    cardImage: '/images/austin.png',
    information: {
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: 15,
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 5000,
      managementFee: 0.25,
      fundSize: 5000000,
    },
  },
  {
    name: 'Tampa',
    heroImage: '/images/tampa-hero.png',
    cardImage: '/images/tampa.png',
    information: {
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: 15,
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 5000,
      managementFee: 0.25,
      fundSize: 5000000,
    },
  },
];
