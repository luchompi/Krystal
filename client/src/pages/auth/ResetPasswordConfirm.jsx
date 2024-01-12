import React, { useState } from "react";
import CardLayout from "../../layouts/CardLayout";
import EditDocument from "../../assets/json/EditDocument.json";
import { useParams } from "react-router-dom";
import SesionHook from "../../hooks/SesionHooks";
const ResetPasswordConfirmElement = () => {
  const { uid, token } = useParams();
  const [data, setData] = useState({
    new_password: "",
    re_new_password: "",
    uid: uid,
    token: token,
  });
  const { sendNewPassword } = SesionHook();

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNewPassword(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">
            Nueva contraseña <i className="ri-lock-password-line"></i>
          </label>
          <input
            type="password"
            className="form-control form-control-border"
            id="password"
            name="new_password"
            placeholder="Ingrese nueva contraseña"
            onInput={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">
            Confirmar contraseña <i className="ri-lock-password-line"></i>
          </label>
          <input
            type="password"
            className="form-control form-control-border"
            id="password2"
            name="re_new_password"
            placeholder="Confirme nueva contraseña"
            required
            onInput={handleInput}
          />
        </div>
        {data.new_password != data.re_new_password ? (
          <div className="alert alert-danger" role="alert">
            Las contraseñas no coinciden
          </div>
        ) : null}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={data.new_password != data.re_new_password}
        >
          Enviar <i className="ri-mail-send-line"></i>
        </button>
      </form>
    </>
  );
};

const ResetPasswordConfirm = () => {
  return (
    <div>
      <CardLayout
        icon={EditDocument}
        header={"Cambiar contraseña"}
        title="Formulario de cambio de clave"
        component={<ResetPasswordConfirmElement />}
      />
    </div>
  );
};

export default ResetPasswordConfirm;
