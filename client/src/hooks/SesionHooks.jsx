import { useNavigate } from "react-router-dom";
import {
  activateUser,
  createUser,
  getTokens,
  getUserData,
  refreshToken,
  resetPassword,
  resetPasswordConfirm,
} from "../apis/auth.apis";
import sesionStore from "../stores/sesion.store";
import {
  confirmMessage,
  errorMessage,
  successMessage,
} from "../components/messages";
import InventarioHook from "./InventarioHook";
const SesionHook = () => {
  const { setTokens, alterLoading } = sesionStore((state) => state);
  const url = useNavigate();
  const { getAllData } = InventarioHook();

  const getUserInfo = async () => {
    const { setUserData, isLogged, userData } = sesionStore((state) => state);
    if (userData == null && isLogged) {
      await getUserData()
        .then((Response) => {
          setUserData(Response.data);
        })
        .then(() => {
          getAllData();
        });
    }
  };

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
    alterLoading(true);
    await createUser(data)
      .then(() => {
        successMessage(
          "¡Hecho!",
          "Usuario creado exitosamente, verifique su correo para mayor información"
        );
      })
      .catch((error) => {
        errorMessage(error);
      })
      .finally(() => {
        alterLoading(false);
      });
  };

  const activateAccount = async (data) => {
    alterLoading(true);
    await activateUser(data)
      .then(() => {
        successMessage(
          "¡Hecho!",
          "Se ha activado su cuenta, puede iniciar sesión."
        );
        alterLoading(false);
        url("/login");
      })
      .catch((error) => {
        errorMessage(error);
      })
      .finally(() => {
        alterLoading(false);
      });
  };

  const sendMailToChangePassword = async (data) => {
    alterLoading(true);
    await resetPassword(data)
      .then(() => {
        successMessage(
          "¡Hecho!",
          "Se ha enviado un correo para cambiar su contraseña."
        );
        alterLoading(false);
        url("/login");
      })
      .catch((error) => {
        errorMessage(error);
      })
      .finally(() => {
        alterLoading(false);
      });
  };

  const sendNewPassword = async (data) => {
    alterLoading(true);
    await resetPasswordConfirm(data)
      .then(() => {
        successMessage("¡Hecho!", "Se ha cambiado su contraseña.");
        alterLoading(false);
        url("/login");
      })
      .catch((error) => {
        errorMessage(error);
      })
      .finally(() => {
        alterLoading(false);
      });
  };

  const requestNewPat = async () => {
    const { RAT, setPAT, timer, logout } = sesionStore((state) => state);
    const data = { refresh: RAT };
    if (timer === 1500 && timer < 1800) {
      confirmMessage(
        "¡Atención!",
        "Su sesión está a punto de expirar, ¿Desea renovarla?",
        "Sí",
        "No",
        () => {
          refreshToken(data)
            .then((Response) => {
              setPAT(Response.data);
              successMessage("¡Hecho!", "Su sesión se ha renovado.");
            })
            .catch((error) => {
              errorMessage(error);
            });
        },
        () => {
          logout();
        }
      );
    }
    timer === 1800000 && logout();
  };
  return {
    makeLogin,
    makeRegister,
    activateAccount,
    sendMailToChangePassword,
    sendNewPassword,
    requestNewPat,
    getUserInfo,
  };
};

export default SesionHook;
