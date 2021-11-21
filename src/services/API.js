import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

function signUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}
function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}
function getPlan(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/plans`, config);
}
function createPlan(body, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/plans`, body, config);
}
export { signUp, signIn, getPlan, createPlan };
