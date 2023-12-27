import { RedirectIfAuth } from "../../middleware/SesionMiddleware.jsx";
import CardLayout from "../../layouts/CardLayout.jsx";
import EditDocument from "../../assets/json/EditDocument.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sesionStore from "../../store/sesion.store.js";
import { crearUsuario } from "../../apis/auth.apis.js";
import { errorMessage } from "../../components/messages.js";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    re_password: "",
    email: "",
  });
  const navigate = useNavigate();
  const { alterLoading } = sesionStore((state) => state);
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alterLoading(true);
    await crearUsuario(data)
      .then((Response) => {
        alterLoading(false);
        navigate("/success-register");
      })
      .catch((error) => {
      
        errorMessage(error.response.data);
      })
      .finally(() => {
        alterLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            Usuario <i className="ri-user-line"></i>
          </label>
          <input
            type="text"
            className="form-control form-control-border"
            id="username"
            placeholder="Ingrese su usuario: Ej. pepe.perez"
            name="username"
            required
            onInput={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Contraseña <i className="ri-key-2-line"></i>
          </label>
          <input
            type="password"
            className="form-control form-control-border"
            id="password"
            placeholder="Ingrese una contraseña"
            name="password"
            required
            onInput={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rePassword">
            Repita su contraseña <i className="ri-key-2-line"></i>
          </label>
          <input
            type="password"
            className="form-control form-control-border"
            id="re_password"
            placeholder="Repita su contraseña"
            name="re_password"
            required
            onInput={handleInput}
          />
        </div>
        {data.password !== data.re_password ? (
          <div className="alert alert-danger" role="alert">
            Las contraseñas no coinciden
          </div>
        ) : (
          <></>
        )}
        <div className="form-group">
          <label htmlFor="email">
            Correo electrónico <i className="ri-mail-send-fill"></i>
          </label>
          <input
            type="email"
            className="form-control form-control-border"
            id="email"
            placeholder="Ingrese su usuario"
            name="email"
            required
            onInput={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Crear usuario <i className="ri-user-add-line"></i>
        </button>
      </form>
    </>
  );
};

const Register = () => {
  RedirectIfAuth();
  return (
    <div className="col col-lg-6">
      <CardLayout
        header={"Registro de usuarios"}
        title={"Registrar usuario nuevo"}
        component={<RegisterForm />}
        icon={EditDocument}
      />
    </div>
  );
};

export default Register;
