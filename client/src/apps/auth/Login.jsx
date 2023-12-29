import CardLayout from "../../layouts/CardLayout";
import Fingerprint from "../../assets/json/Fingerprint.json";
import {useState} from "react";
import {login, obtenerDatosUsuario} from "../../apis/auth.apis";
import sesionStore from "../../store/sesion.store.js";
import {errorMessage, successMessage} from "../../components/messages.js";
import {Link, useNavigate} from "react-router-dom";
import {RedirectIfAuth} from "../../middleware/SesionMiddleware.jsx";
import DataLoader from "../../hooks/data.loader.jsx";

const getUserData = async () => {
    const response = await obtenerDatosUsuario();
    return response.data
};

const LoginForm = () => {
    const dataLoader = DataLoader();
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const {setTokens, alterLoading, setUserData} = sesionStore(
        (state) => state
    );
    const navigate = useNavigate();
    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alterLoading(true);
        login(data)
            .then((Response) => {
                setTokens(Response.data);
                alterLoading(false);
                successMessage("Bienvenido", "Sesión iniciada correctamente");
            })
            .then(() => {
                dataLoader()
                navigate("/dashboard");
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
            <h3>Ingrese sus credenciales</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">
                        Usuario <i className="ri-user-line"></i>
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-border"
                        id="username"
                        placeholder="Ingrese su usuario"
                        name="username"
                        onInput={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Contraseña <i className="ri-key-line"></i>
                    </label>
                    <input
                        type="password"
                        className="form-control form-control-border"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        name="password"
                        onInput={handleInput}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ingresar <i className="ri-door-open-line"></i>
                </button>
                <Link to={`/change-password`} className="text-muted">¿Olvidó su contraseña?</Link>
            </form>
        </>
    );
};

const Login = () => {
    document.title = "Login | Krystal App";
    RedirectIfAuth()
    return (
        <div className="col col-lg-6">
            <CardLayout
                header="Módulo de Autenticación"
                title="Inicio de Sesión"
                icon={Fingerprint}
                component={<LoginForm/>}
            />
        </div>
    );
};

export default Login;
