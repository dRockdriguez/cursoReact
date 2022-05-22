import { types } from "../types/types";
import { googleAuthProvider } from "../../firebase/firebase-config";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "dadsaf"));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    const auth = getAuth();
    const {
      user: { uid, displayName },
    } = await signInWithPopup(auth, googleAuthProvider);
    dispatch(login(uid, displayName));
  };
};

export const startRegister = ({ email, password, name }) => {
  return async (dispatch) => {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName: name });
    const { uid, displayName } = user;
    dispatch(login(uid, displayName));
  };
};
