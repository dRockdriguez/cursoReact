import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../redux/selectors/ui";
import { Loader } from "../components/ui/Loader";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "../redux/actions/auth";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  const loading = useSelector(selectLoading);
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  return (
    <>
      {(checking || loading) && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRouter isAuth={isLogged}>
                <AuthRouter />
              </PublicRouter>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRouter isAuth={isLogged}>
                <JournalScreen />
              </PrivateRouter>
            }
          />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
