export const setCookie = (name: string, value: string) => {
  let expires = '';
  const date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  expires = '; expires=' + date.toUTCString();
  const domain =
    process.env.NEXT_PUBLIC_APP_ENV === 'development' ? 'localhost' : '.nada.co';

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

export const formatPrice = (price: number) => {
  return `$${price.toLocaleString()}`;
};

export const formatPercent = (percent: number) => {
  return `${percent}%`;
};
