import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-2">Login</h3>

      <form>
        <input
          className="auth__input mb-1"
          type="email"
          placeholder="Email..."
          name="email"
          autoComplete="off"
        />
        
        <input
          className="auth__input mb-1"
          type="password"
          placeholder="Password..."
          name="password"
        />

        <button className="btn btn-primary btn-block" type="submit">
          Go
        </button>

        <div className="auth__social-networks">
          <p className="mb-2">Login with Social Networks</p>

          <div className="google-btn">
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
