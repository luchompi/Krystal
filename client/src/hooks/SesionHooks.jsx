import {useNavigate} from "react-router-dom";
import {activateUser, createUser, getTokens} from "../apis/auth.apis";
import sesionStore from "../stores/sesion.store";
import {errorMessage, successMessage} from "../components/messages";

const SesionHook = () => {
    const {setTokens, alterLoading} = sesionStore((state) => state);
    const url = useNavigate();
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
            .then((Response) => {
                successMessage('¡Hecho!', 'Usuario creado exitosamente, verifique su correo para mayor información')
            })
            .catch((error) => {
                errorMessage(error)
            })
            .finally(() => {
                alterLoading(false)
            })
    }

    const activateAccount = async (data) => {
        alterLoading(true);
        await activateUser(data)
            .then((Response) => {
                successMessage('¡Hecho!', 'Se ha activado su cuenta, puede iniciar sesión.')
                alterLoading(false)
                url('/login')
            })
            .catch((error) => {
                errorMessage(error)
            })
            .finally(() => {
                alterLoading(false)
            })
    };
    return {makeLogin, makeRegister, activateAccount};
};

export default SesionHook;
