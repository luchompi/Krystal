import CardLayout from "../layouts/CardLayout.jsx";
import Restricted2 from '../assets/json/Restricted2.json';
import {useNavigate} from "react-router-dom";
import sesionStore from "../stores/sesion.store.js";

const Error403 = () => {
    const url = useNavigate()
    const {clearStore} = sesionStore((state) => state);
    const handleClick = (e) => {
        e.preventDefault()
        clearStore()
        url('/login')
    }
    return (
        <div>
            <CardLayout icon={Restricted2} header={"403 - Acceso denegado"} title={"Hemos encontrado un problema."}
                        component={<>
                            <div className="container">
                                <h4>Parece ser que no tienes permisos para realizar esta tarea.</h4>
                                <p>Esto normalmente ocurre por dos razónes:</p>
                                <ul>
                                    <li>Se venció el tiempo de espera para confirmar que estabas ahí o no fue posible
                                        verificarlo.
                                    </li>
                                    <li>No tienes permisos para realizar esta tarea.</li>
                                </ul>
                                <p>Si estabas trabajando, intenta nuevamente iniciando sesión y haciendo clic <button
                                    className="btn btn-outline-primary" onClick={handleClick}>Aquí</button>. De lo
                                    contrario ponte en contacto
                                    con el administrador para mayor información
                                </p>
                            </div>
                        </>}/>
        </div>
    )
}

export default Error403;