import Swal from 'sweetalert2';
import axios from 'axios';

export const fireAlert = (title, text, state) => {
  Swal.fire({
    title,
    text,
    icon: state,
  });
};

export const createRequestSignIn = () => {
  return axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_BASE_URL + '/',
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export function createRequest(contentType) {
  //const user = yield select((state) => state.signInReducer.currentUser);
  const user = localStorage.getItem('currentUser');
  const idToken = JSON.parse(user).stsTokenManager.accessToken;
  return axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_BASE_URL + '/',
    headers: {
      'Content-type': !contentType ? 'application/json' : 'multipart/form-data',
      Authorization: `Bearer ${idToken}`,
    },
  });
}

//Use this to harvest binary data of an image
export const harvestBinaryData = (object) => {
  const binaryData = [];
  binaryData.push(object);
  return binaryData;
};
