import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
interface Config extends AxiosRequestConfig<object> {
  token?: string;
}

export const http = (url: string, { data, token, headers, ...restonfig }: Config = {}) => {
  const config = {
    url: url,
    method: 'get',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    data,
    ...restonfig,
  };

  if (config.method.toLowerCase() === 'get') {
    config.url += `?${qs.stringify(data)}`;
    config.data = undefined;
  }

  return axios(config).then(async (response) => {
    if (response.status === 401) {
      // Unauthorized
      // await auth.logout();
      // window.location.reload();
      return Promise.reject({ message: response.statusText });
    }

    return response.data;
  });
};
