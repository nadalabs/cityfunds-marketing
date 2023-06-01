export const setCookie = (name: string, value: string) => {
  let expires = new Date();
  expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; domain=.nada.co; path=/`;
};

export const getCookie = (name: string) => {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=') || [''];
  if (parts.length > 1) return parts.pop()?.split(';').shift();
};
