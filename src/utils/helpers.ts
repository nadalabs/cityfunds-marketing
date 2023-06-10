export const setCookie = (name: string, value: string) => {
  let expires = '';
  let date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

export const getCookie = (name: string) => {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=') || [''];
  if (parts.length > 1) return parts.pop()?.split(';').shift();
};
