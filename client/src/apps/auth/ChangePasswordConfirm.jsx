import CardLayout from "../../layouts/CardLayout.jsx";
import Code from '../../assets/json/Code.json';
import {useState} from "react";
import sesionStore from "../../store/sesion.store.js";
import {confirmarCambioContrasena} from "../../apis/auth.apis.js";
import {useNavigate, useParams} from "react-router-dom";
import {errorMessage, successMessage} from "../../components/messages.js";

const ChangePasswordForm = () => {
    const {uid, token} = useParams();
    const url = useNavigate();
    const [data, setData] = useState({
        uid: uid,
        token: token,
        new_password: "",
        re_new_password: "",
    });
    const {alterLoading} = sesionStore((state) => state);
    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });

    }

    const handleSubmit = async (e) => {
        alterLoading(true);
        e.preventDefault();
        await confirmarCambioContrasena(data)
            .then((Response) => {
                successMessage("¡Hecho!", "Se ha cambiado la contraseña correctamente. Ya puede iniciar sesión.");
                url("/login");
                alterLoading(false)
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                alterLoading(false)
            })
    }
    return (<form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="password">
                Contraseña <i className="ri-key-2-line"></i>
            </label>
            <input
                type="password"
                className="form-control form-control-border"
                id="password"
                placeholder="Ingrese una contraseña"
                name="new_password"
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
                name="re_new_password"
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
        <button className="btn btn-outline-primary">
            Cambiar contraseña <i className="ri-lock-2-line"></i>
        </button>
    </form>)
}


const ChangePasswordConfirm = () => {
    document.title = "Confirmar cambio de clave | Krystal App";
    return (
        <div className="col col-lg-6">
            <CardLayout
                title={"Confirmar cambio de clave"}
                header={"Cambio de contraseña"}
                icon={Code}
                component={<ChangePasswordForm/>}
            />
        </div>
    )
}

export default ChangePasswordConfirm