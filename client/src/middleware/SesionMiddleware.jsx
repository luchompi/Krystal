import sesionStore from "../store/sesion.store.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {infoMessage, questionMessageForPreventLogout} from "../components/messages.js";

export const RedirectIfAuth = () => {
    const {isLogged} = sesionStore.getState();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogged) {
            navigate("/dashboard");
        }
    }, []);
}


export const RedirectIfAuthRequired = () => {
    const {isLogged} = sesionStore.getState();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogged) {
            navigate("/login");
        }
    }, []);
}

const handleMessage = async () => {
    const response = await questionMessageForPreventLogout("¿Estás ahí?", "La sesión está por expirar. Para evitar cierre de sesión, presione el botón 'Estoy aquí'");
    if (response) {
        return true
    }
}

export const LogoutPreventor = () => {
    const [show, setShow] = useState(false);
    const {destroySesion, resetCounter, counter} = sesionStore((state) => state);
    const navigate = useNavigate();
    if (counter >= 1800000) {
        destroySesion();
        infoMessage("La sesión ha expirado, por favor inicie sesión nuevamente");
        setShow(false);
        navigate("/");
    } else if (counter > 1350000 && counter < 1800000 && !show) {
        setShow(true)
        handleMessage()
            .then((response) => {
                if (response) {
                    resetCounter();
                    setShow(false);
                }
            })
    }
}