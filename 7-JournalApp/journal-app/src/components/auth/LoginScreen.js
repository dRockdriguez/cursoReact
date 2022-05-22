import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../redux/actions/auth";
import { selectLoading } from "../../redux/selectors/ui";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title mb-2">Login {loading}</h3>

      <form onSubmit={handleLogin}>
        <input
          className="auth__input mb-1"
          type="email"
          placeholder="Email..."
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input mb-1"
          type="password"
          placeholder="Password..."
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Go
        </button>

        <div className="auth__social-networks">
          <p className="mb-2">Login with Social Networks</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

          <Link className="link mt-2" to="/auth/register">
            Create new account
          </Link>
        </div>
      </form>
    </>
  );
};
