import { useNavigate } from "react-router-dom";
import { getTokens } from "../apis/auth.apis";
import sesionStore from "../stores/sesion.store";

const SesionHook = () => {
  const { setTokens, alterLoading, isLogged } = sesionStore((state) => state);
  isLogged ? url("/dashboard") : null;
  const url = useNavigate();
  const makeLogin = async (data) => {
    alterLoading(true);
    await getTokens(data)
      .then((Response) => {
        setTokens(Response.data);
        alterLoading(false);
        url("/dashboard");
      })
      .catch((error) => {
        console.log(error.response.data);
        alterLoading(false);
      });
  };
  return { makeLogin };
};

export default SesionHook;
