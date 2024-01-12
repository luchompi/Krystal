import CardLayout from "../../layouts/CardLayout";
import SendMail from "../../assets/json/SendMail.json";
import { useState } from "react";
import SesionHook from "../../hooks/SesionHooks";

const ForgotElement = () => {
  const [mail, setMail] = useState("");
  const { sendMailToChangePassword } = SesionHook();

  const handleInput = (e) => {
    setMail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMailToChangePassword({ email: mail });
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">¡Información importante!</h5>
          <p className="card-text">
            Si olvidaste tu contraseña, ingresa tu correo electrónico y te
            enviaremos un correo con los pasos para recuperar tu contraseña.
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  Correo <i className="ri-mail-line"></i>
                </label>
                <input
                  type="email"
                  className="form-control form-control-border"
                  id="email"
                  name="email"
                  placeholder="Ingrese correo electrónico"
                  required
                  onInput={handleInput}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar <i className="ri-mail-send-line"></i>
              </button>
            </form>
          </p>
        </div>
      </div>
    </>
  );
};

const ForgotPassword = () => {
  return (
    <div>
      <CardLayout
        icon={SendMail}
        header={"¿Olvidaste tu contraseña?"}
        title={"Recuperar clave"}
        component={<ForgotElement />}
      />
    </div>
  );
};

export default ForgotPassword;
