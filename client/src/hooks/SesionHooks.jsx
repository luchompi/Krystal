import { useNavigate } from "react-router-dom";
import { getTokens } from "../apis/auth.apis";
import sesionStore from "../stores/sesion.store";
import { errorMessage, successMessage } from "../components/messages";

const SesionHook = () => {
  const { setTokens, alterLoading, isLogged } = sesionStore((state) => state);
  const url = useNavigate();
  isLogged ? url("/dashboard") : null;
  const makeLogin = async (data) => {
    alterLoading(true);
    await getTokens(data)
      .then((Response) => {
        setTokens(Response.data);
        successMessage("¡Hecho!", "Inicio de sesión exitoso");
        alterLoading(false);
        url("/dashboard");
      })
      .catch((error) => {
        errorMessage(error);
        alterLoading(false);
      });
  };

  const makeRegister = async (data) => {
    console.log(data);
  };

  const activateAccount = async (data) => {
    console.log(data);
  };
  return { makeLogin, makeRegister, activateAccount };
};

export default SesionHook;
