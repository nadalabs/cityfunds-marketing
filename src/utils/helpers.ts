export const setCookie = (name: string, value: string) => {
  let expires = '';
  const date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  expires = '; expires=' + date.toUTCString();
  const domain =
    process.env.NEXT_PUBLIC_APP_ENV === 'localhost'
      ? 'localhost'
      : '.cityfunds.com';

  document.cookie =
    name +
    '=' +
    (value || '') +
    expires +
    `; path=/; domain=${domain}; SameSite=None; Secure`;
};

export const getCookie = (name: string) => {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=') || [''];
  if (parts.length > 1) return parts.pop()?.split(';').shift();
};

export const shortenNumber = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '';
};

export const formatPrice = (price: number, decimals: number) => {
  if (typeof price !== 'number' || isNaN(price)) {
    return 'Invalid Number';
  }

  const options = {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };

  return `$${price.toLocaleString(undefined, options)}`;
};

export const formatPercent = (percent: number, decimals: number) => {
  if (typeof percent !== 'number' || isNaN(percent)) {
    return 'Invalid Number';
  }

  const options = {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  };

  return `${percent.toLocaleString(undefined, options)}%`;
};

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const getTodaysDate = () => {
  const today = new Date();
  return today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getTimeRemaining = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const nextMonth = (currentMonth + 1) % 12;
  const nextMonthYear =
    currentMonth === 11 ? now.getFullYear() + 1 : now.getFullYear();
  const endOfMonth = new Date(nextMonthYear, nextMonth, 1);
  const remainingTime = endOfMonth.getTime() - now.getTime();
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return { days, hours };
};

export const trackPageView = async (event: string) => {
  await window.analytics.track(event);
};

export const isDateInRange = (targetDate) => {
  const now = new Date();
  const tenDaysFromNow = new Date();
  tenDaysFromNow.setDate(now.getDate() + 10);
  return targetDate > now && targetDate < tenDaysFromNow;
};

export const scrollToDiv = (id: string) => {
  const div = document.getElementById(id);
  div?.scrollIntoView({ behavior: 'smooth' });
};
