import CardLayout from "../../layouts/CardLayout.jsx";
import EditDocument from "../../assets/json/EditDocument.json";
import { useState } from "react";
import SesionHook from "../../hooks/SesionHooks.jsx";
import { RedirectIfAuth } from "../../hooks/SesionRedirector.jsx";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    re_password: "",
    email: "",
  });

  const { makeRegister } = SesionHook();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRegister(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            Usuario <i className="ri-account-box-line"></i>
          </label>
          <input
            type="text"
            className="form-control form-control-border"
            id="username"
            name="username"
            placeholder="Ingrese un nombre de usuario"
            required
            onInput={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Contraseña <i className="ri-key-line"></i>
          </label>
          <input
            type="password"
            className="form-control form-control-border"
            id="password"
            placeholder="Ingrese una contraseña"
            name="password"
            minLength={"8"}
            required
            onInput={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Repita su contraseña <i className="ri-key-line"></i>
          </label>
          <input
            type="password"
            className="form-control form-control-border"
            id="password"
            placeholder="Repita su contraseña"
            name="re_password"
            minLength="8"
            required
            onInput={handleInput}
          />
        </div>
        {data.password !== data.re_password && data.re_password.length ? (
          <>
            <div className="alert alert-danger" role="alert">
              Las contraseñas no coinciden.
            </div>
          </>
        ) : null}

        <div className="form-group">
          <label htmlFor="email">
            Correo electrónico <i className="ri-mail-line"></i>
          </label>
          <input
            type="email"
            className="form-control form-control-border"
            id="email"
            name="email"
            placeholder="Ingrese un correo electrónico"
            required
            onInput={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Registrarse <i className="ri-send-plane-2-line"></i>
        </button>
      </form>
    </>
  );
};

const Register = () => {
  RedirectIfAuth();
  return (
    <>
      <CardLayout
        icon={EditDocument}
        header={"Registrar usuario"}
        title={"Registro de usuario"}
        component={<RegisterForm />}
      />
    </>
  );
};

export default Register;
