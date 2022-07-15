import Swal from 'sweetalert2';
import {Auth} from "aws-amplify";

export const fireAlert = (title, text, state) => {
  Swal.fire({
    title,
    text,
    icon: state,
  });
};

//Use this to get the cognito id token
export const getIDToken = async () => {
  return Auth.currentSession().then((res) => res.getIdToken().getJwtToken())
}

//Use this to harvest binary data of an image
export const harvestBinaryData = (object) => {
  const binaryData = [];
  binaryData.push(object);
  return binaryData;
};
