const baseUrl = 'https://treasury-love-api-dev.treasury.love';

const defaultHeaders = { 'Content-type': 'application/json' };

const routes = {
  entries: `${baseUrl}/entries`,
  register: `${baseUrl}/auth`,
  signIn: `${baseUrl}/sign_in`,
};

export default {
  register(name, email, password) {
    return fetch(routes.register, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(response => response.json());
  },
  login(email, password) {
    return fetch(routes.login, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(response => response.json());
  },
};
