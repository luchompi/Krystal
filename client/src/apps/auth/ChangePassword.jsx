import CardLayout from "../../layouts/CardLayout.jsx";
import SendMail from '../../assets/json/SendMail.json'
import {useState} from "react";
import {cambiarContrasena} from "../../apis/auth.apis.js";
import {errorMessage, successMessage} from "../../components/messages.js";
import {useNavigate} from "react-router-dom";
import sesionStore from "../../store/sesion.store.js";

const ChangePasswordForm = () => {
    const url = useNavigate()
    const {alterLoading, isLogged, userData} = sesionStore((state) => state);
    const [email, setEmail] = useState(
        isLogged ? userData?.email : ""
    );
    const handleInput = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alterLoading(true)
        await cambiarContrasena({email})
            .then((Response) => {
                successMessage("Correo enviado", "Verifique su bandeja de entrada")
                url("/")
                alterLoading(false)
            })
            .catch((error) => {
                errorMessage(error.response.data)
            })
            .finally(() => {
                alterLoading(false)
            })
    }
    return (<>
        {isLogged ? (<>
            <p>Se ha detectado que la sesión se encuentra iniciada, por lo que se le enviará las instrucciones de cambio
                de contraseña al correo registrado en esta sesión.</p>
            <button className="btn btn-primary" onClick={handleSubmit}>
                Enviar <i className="ri-mail-send-line"></i>
            </button>
        </>) : (<>
            <p>Para cambiar su cuenta, ingrese la dirección de correo electrónico asociada a su perfil, y haga clic en
                el
                botón "enviar"</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="password">
                        Correo electrónico <i className="ri-mail-line"></i>
                    </label>
                    <input
                        type="email"
                        className="form-control form-control-border"
                        id="password"
                        placeholder="Ingrese su correo electrónico"
                        name="password"
                        required
                        onInput={handleInput}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar <i className="ri-mail-send-line"></i>
                </button>
            </form>
        </>)}
    </>)
}


const ChangePassword = () => {
    document.title = "Cambiar contraseña | Krystal App"
    return (
        <div className="col col-lg-6">
            <CardLayout
                header={"Cambiar contraseña"}
                title={"Procedimiento de cambio de clave"}
                icon={SendMail}
                component={<ChangePasswordForm/>}
            />
        </div>
    )
}

export default ChangePassword;