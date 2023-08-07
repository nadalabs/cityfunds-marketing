import {
  FUND_TERM,
  FUND_TYPE,
  LIQUIDITY,
  LOCKUP_PERIOD,
  REGULATION,
  STRATEGY,
  TAX_FORM,
} from '@utils/models';

export enum EXTERNAL_ROUTES {
  WEB_APP = 'https://invest.nada.co/signup',
  DOWNLOAD = 'https://nada.onelink.me/wNEn/ksbeffng',
  TYPEFORM = 'https://form.typeform.com/to/fv2eTpuT',
  CAREERS = 'https://linkedin.com/company/hellonada/jobs',
  APPLE_STORE = 'https://apps.apple.com/us/app/nada-finance/id1615840472',
  GOOGLE_STORE = 'https://play.google.com/store/apps/details/Nada_Finance?id=com.nada.debitapp',
  HUBSPOT_MEETING = 'https://meetings.hubspot.com/deyon-robertson/accredited-investors',
  HUBSPOT_FAQS = 'https://faqs.nada.co',
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
      { name: 'Accredited Investors', link: '/accredited-investors' },
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

export const FAQS = [
  {
    question: 'What is a Cityfund?',
    answer:
      "Cityfunds is the first ever index-like fund providing access to a city's home equity market. By untapping the $20T home equity space, our investments model enables our assets to appreciate 2.2x faster than the standard home appreciation.",
  },
  {
    question: 'Who are Cityfunds for?',
    answer:
      "Built for people who want to join the exponential growth of the nation's top cities.",
  },
  {
    question: 'What makes Cityfunds different?',
    answer:
      "Cityfunds is the first index-like fund providing access to a city's home equity market. Returns generated by our Homeshares product allows you to participate in home appreciation over time.",
  },
  {
    question: 'Will my money be tied up?',
    answer:
      "No! We have redemption programs in place for you. You're either thrilled about your portfolio growth or sell your shares to get your money back.",
  },
];

export const FEATURED_CITIES = [
  {
    name: 'Yield',
    images: {
      heroImage: '/images/yield-hero.png',
      cardImage: '/images/yield.png',
      mapImage: '/images/yield-map.png',
      accredImage: '/images/yield-tall.png',
      carouselImages: [''],
    },
    documents: {
      executiveSummary:
        'https://nada-offering-documents.s3.amazonaws.com/yield/executive-summary.pdf',
      offeringMemorandum:
        'https://nada-offering-documents.s3.amazonaws.com/yield/offering-memorandum.pdf',
      subscriptionAgreement:
        'https://nada-offering-documents.s3.amazonaws.com/yield/subscription-agreement.pdf',
      wireInstructions:
        'https://nada-offering-documents.s3.amazonaws.com/yield/wire-instructions.pdf',
    },
    information: {
      regulation: REGULATION.REG_D,
      fundType: FUND_TYPE.DEBT,
      strategy: STRATEGY.INCOME,
      taxForm: TAX_FORM.DIV,
      targetIRR: '7.5% Fixed',
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.YEARS_5,
      lockupPeriod: LOCKUP_PERIOD.YEARS_2,
      minInvestment: 5000,
      managementFee: 0.25,
      fundSize: 5000000,
    },
  },
  {
    name: 'Portfolio',
    images: {
      heroImage: '/images/portfolio-hero.png',
      cardImage: '/images/portfolio.png',
      mapImage: '/images/portfolio-map.png',
      accredImage: '/images/portfolio-tall.png',
      carouselImages: [''],
    },
    documents: {
      executiveSummary:
        'https://nada-offering-documents.s3.amazonaws.com/portfolio/executive-summary.pdf',
      offeringMemorandum:
        'https://nada-offering-documents.s3.amazonaws.com/portfolio/offering-memorandum.pdf',
      subscriptionAgreement:
        'https://nada-offering-documents.s3.amazonaws.com/portfolio/subscription-agreement.pdf',
      wireInstructions:
        'https://nada-offering-documents.s3.amazonaws.com/portfolio/wire-instructions.pdf',
    },
    information: {
      regulation: REGULATION.REG_D,
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: '14-17%',
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.YEARS_1,
      minInvestment: 50000,
      managementFee: 0,
      fundSize: 100000000,
    },
  },
  {
    name: 'Miami',
    images: {
      heroImage: '/images/miami-hero.png',
      cardImage: '/images/miami.png',
      mapImage: '/images/miami-map.png',
      accredImage: '/images/miami-tall.png',
      carouselImages: [''],
    },
    documents: {
      executiveSummary:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_004',
      offeringMemorandum:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_010',
      subscriptionAgreement:
        'https://nada-offering-documents.s3.amazonaws.com/miami/subscription-agreement.pdf',
      wireInstructions:
        'https://nada-offering-documents.s3.amazonaws.com/miami/wire-instructions.pdf',
    },
    information: {
      regulation: REGULATION.REG_A,
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: '14-17%',
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 100,
      managementFee: 1.5,
      fundSize: 10000000,
    },
    returns: {
      sharePrice: 10.8,
      appreciation: 8.0,
      totalAssets: 10,
    },
  },
  {
    name: 'Dallas',
    images: {
      heroImage: '/images/dallas-hero.png',
      cardImage: '/images/dallas.png',
      mapImage: '/images/dallas-map.png',
      accredImage: '/images/dallas-tall.png',
      carouselImages: [''],
    },
    documents: {
      executiveSummary:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_004',
      offeringMemorandum:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_009',
      subscriptionAgreement:
        'https://nada-offering-documents.s3.amazonaws.com/dallas/subscription-agreement.pdf',
      wireInstructions:
        'https://nada-offering-documents.s3.amazonaws.com/dallas/wire-instructions.pdf',
    },
    information: {
      regulation: REGULATION.REG_A,
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: '14-17%',
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 100,
      managementFee: 1.5,
      fundSize: 10000000,
    },
    returns: {
      sharePrice: 10.63,
      appreciation: 6.3,
      totalAssets: 17,
    },
  },
  {
    name: 'Austin',
    images: {
      heroImage: '/images/austin-hero.png',
      cardImage: '/images/austin.png',
      mapImage: '/images/austin-map.png',
      accredImage: '/images/austin-tall.png',
      carouselImages: [''],
    },
    documents: {
      executiveSummary:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_004',
      offeringMemorandum:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_008',
      subscriptionAgreement:
        'https://nada-offering-documents.s3.amazonaws.com/austin/subscription-agreement.pdf',
      wireInstructions:
        'https://nada-offering-documents.s3.amazonaws.com/austin/wire-instructions.pdf',
    },
    information: {
      regulation: REGULATION.REG_A,
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: '14-17%',
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 100,
      managementFee: 1.5,
      fundSize: 10000000,
    },
    returns: {
      sharePrice: 10.75,
      appreciation: 7.5,
      totalAssets: 22,
    },
  },
  {
    name: 'Tampa',
    images: {
      heroImage: '/images/tampa-hero.png',
      cardImage: '/images/tampa.png',
      mapImage: '/images/tampa-map.png',
      accredImage: '/images/tampa-tall.png',
      carouselImages: [''],
    },
    documents: {
      executiveSummary:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_004',
      offeringMemorandum:
        'https://www.sec.gov/Archives/edgar/data/1874979/000149315223008049/form253g2.htm#a_012',
      subscriptionAgreement:
        'https://nada-offering-documents.s3.amazonaws.com/tampa/subscription-agreement.pdf',
      wireInstructions:
        'https://nada-offering-documents.s3.amazonaws.com/tampa/wire-instructions.pdf',
    },
    information: {
      regulation: REGULATION.REG_A,
      fundType: FUND_TYPE.EQUITY,
      strategy: STRATEGY.GROWTH,
      taxForm: TAX_FORM.DIV,
      targetIRR: '14-17%',
      liquidity: LIQUIDITY.QUARTERLY,
      fundTerm: FUND_TERM.OPEN_ENDED,
      lockupPeriod: LOCKUP_PERIOD.NONE,
      minInvestment: 100,
      managementFee: 1.5,
      fundSize: 10000000,
    },
    returns: {
      sharePrice: 10,
      appreciation: 0,
      totalAssets: 3,
    },
  },
];
