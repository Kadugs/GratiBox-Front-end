import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function signUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}
function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}
export { signUp, signIn };