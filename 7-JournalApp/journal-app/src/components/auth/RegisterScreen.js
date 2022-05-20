import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-2">Sign up</h3>

      <form>
        <input
          className="auth__input mb-1"
          type="name"
          placeholder="Name..."
          name="name"
          autoComplete="off"
        />

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

        <input
          className="auth__input mb-1"
          type="confirm"
          placeholder="Confirm password..."
          name="confirm"
        />

        <button className="btn btn-primary btn-block mb-2" type="submit">
          Go
        </button>

        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};
