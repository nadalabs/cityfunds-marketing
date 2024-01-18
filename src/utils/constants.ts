export enum EXTERNAL_ROUTES {
  DOWNLOAD = 'https://nada.onelink.me/wNEn/ksbeffng',
  CAREERS = 'https://linkedin.com/company/hellonada/jobs',
  APPLE_STORE = 'https://apps.apple.com/us/app/nada-finance/id1615840472',
  GOOGLE_STORE = 'https://play.google.com/store/apps/details/Nada_Finance?id=com.nada.debitapp',
  BUSINESS_BUREAU = 'https://www.bbb.org/us/tx/dallas/profile/investment-management/cityfunds-by-nada-0875-91340285#sealclick',
  BENZINGA_AWARD = 'https://www.benzinga.com/fintech/23/11/35922810/nada-takes-home-coveted-best-alternative-investments-platform-at-benzinga-global-fintech-awards-2023',
  HUBSPOT_MEETING = 'https://meetings.hubspot.com/deyon-robertson/accredited-investors',
  HUBSPOT_FAQS = 'https://faqs.nada.co/cityfunds',
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
  'sharedCredentialsUuid',
];

export const HEADER_LINKS = [
  { name: 'Cityfunds', link: '/' },

  {
    name: 'Resources',
    links: [
      { name: 'Learn', link: '/learn' },
      { name: 'About', link: '/about' },
      { name: 'News', link: '/news' },
      { name: 'FAQs', link: EXTERNAL_ROUTES.HUBSPOT_FAQS, isNewTab: true },
    ],
  },
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
    link: 'https://irgtndauzeikqqggeniu.supabase.co/storage/v1/object/public/nada/consumer-complaint.pdf',
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
      { name: 'Learn', link: '/learn' },
      { name: 'About', link: '/about' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Nada', link: process.env.NEXT_PUBLIC_NADA_URL },
      { name: 'News', link: '/news' },
      { name: 'FAQs', link: EXTERNAL_ROUTES.HUBSPOT_FAQS },
    ],
  },
  {
    title: 'Transparency',
    links: LEGAL_LINKS,
  },
];

export const ICON_LINKS = [
  {
    name: 'Apple Store',
    link: EXTERNAL_ROUTES.APPLE_STORE,
    icon: '/icons/app-store.svg',
  },
  {
    name: 'Google Store',
    link: EXTERNAL_ROUTES.GOOGLE_STORE,
    icon: '/icons/google-play.svg',
  },
  {
    name: 'Better Business Bureau',
    link: EXTERNAL_ROUTES.BUSINESS_BUREAU,
    icon: '/images/business-bureau.png',
  },
  {
    name: 'Benzinga Award Winner',
    link: EXTERNAL_ROUTES.BENZINGA_AWARD,
    icon: '/images/benzinga-award.png',
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', link: 'https://www.facebook.com/HelloNadaHomes' },
  { name: 'Twitter', link: 'https://twitter.com/nada_finance' },
  { name: 'Instagram', link: 'https://www.instagram.com/nadafinance.app' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/company/hellonada' },
  { name: 'Discord', link: 'https://discord.com/invite/AGhPSkQjYX' },
  { name: 'TikTok', link: 'https://www.tiktok.com/@nadafinance' },
];

export enum FUND_STATUS {
  NEW_OFFERING = 'New Offering',
  RAMPING_UP = 'Ramping Up',
  PERFORMING = 'Performing',
  TRADING = 'Trading',
}

export enum FUND_TYPE {
  EQUITY = 'Equity',
  DEBT = 'Debt',
}

export enum REGULATION {
  RETAIL = 'Retail',
  ACCREDITED = 'Accredited',
}
