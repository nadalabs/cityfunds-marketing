import { createGlobalStyle } from 'styled-components';
import { Poppins, Work_Sans, Yellowtail } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: 'normal',
  display: 'swap',
  variable: '--poppins',
});

const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: 'normal',
  display: 'swap',
  variable: '--work_sans',
});

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
  style: 'normal',
  display: 'swap',
  variable: '--yellowtail',
});

export default createGlobalStyle`
  :root {
    --poppins: ${poppins.style.fontFamily};
    --work_sans: ${work_sans.style.fontFamily};
    --yellowtail: ${yellowtail.style.fontFamily};
  }
  html: {
    font-family: var(--poppins),  var(--work_sans),  var(--yellowtail), 'sans-serif';
  }
  body {
    color: #2A8356;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .slick-slide > div {
    margin: 0 8px;
  }
  .slick-list {
    margin: 0 -8px;
  }
`;
