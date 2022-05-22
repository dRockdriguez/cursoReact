import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { setError, removeError } from "../../redux/actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    const valid = isValidForm();
    if (valid.valid) {
      dispatch(removeError());
    } else {
      dispatch(setError(valid.error));
    }
  };

  const isValidForm = () => {
    if (name.trim().length <= 0) {
      return {
        valid: false,
        error: "The name is invalid",
      };
    } else if (!validator.isEmail(email)) {
      return {
        valid: false,
        error: "The email is invalid",
      };
    } else if (password.length <= 5 || password !== confirm) {
      return {
        valid: false,
        error: "The password is invalid",
      };
    }
    return {
      valid: true,
    };
  };

  return (
    <>
      <h3 className="auth__title mb-2">Sign up</h3>

      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola</div>

        <input
          className="auth__input mb-1"
          type="name"
          placeholder="Name..."
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

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

        <input
          className="auth__input mb-1"
          type="password"
          placeholder="Confirm password..."
          name="confirm"
          value={confirm}
          onChange={handleInputChange}
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
