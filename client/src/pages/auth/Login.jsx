import CardLayout from "../../layouts/CardLayout";
import Fingerprint from "../../assets/json/Fingerprint.json";
import { useState } from "react";
import SesionHook from "../../hooks/SesionHooks";
import { Link } from "react-router-dom";
import { RedirectIfAuth } from "../../hooks/SesionRedirector";

const LoginForm = () => {
  const { makeLogin } = SesionHook();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    makeLogin(data);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Ingrese los datos requeridos</h5>
          <div className="card-text">
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
                  placeholder="Nombre de usuario"
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
                  name="password"
                  placeholder="Contraseña"
                  required
                  onInput={handleInput}
                />
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
                <Link
                  to={`/forgot-password`}
                  type="button"
                  className="btn secondary"
                >
                  ¿Olvidó su contraseña?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  RedirectIfAuth();
  return (
    <div className="col col-lg-5">
      <CardLayout
        icon={Fingerprint}
        header={"Krystal App"}
        title="Iniciar Sesión"
        component={<LoginForm />}
      />
    </div>
  );
};

export default Login;
