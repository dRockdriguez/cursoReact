import Swal from "sweetalert2";
import { types } from "../types/types";
import { googleAuthProvider } from "../../firebase/firebase-config";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { finishLoading, startLoading } from "./ui";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName } = user;
      dispatch(login(uid, displayName));
    } catch (e) {
      showError(e.message);
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      const {
        user: { uid, displayName },
      } = await signInWithPopup(auth, googleAuthProvider);
      dispatch(login(uid, displayName));
    } catch (e) {
      showError(e.message);
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startRegister = ({ email, password, name }) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      const { uid, displayName } = user;
      dispatch(login(uid, displayName));
    } catch (e) {
      showError(e.message);
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const auth = getAuth();
      await signOut(auth);
      dispatch(logout());
    } catch (e) {
      showError(e.message);
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const logout = () => ({
  type: types.logout,
});

const showError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
