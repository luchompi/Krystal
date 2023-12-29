import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import sesionStore from "../store/sesion.store";
import {successMessage} from "./messages";

const Navbar = ({dateTime}) => {
    const {isLogged, userData} = sesionStore((state) => state);
    const salir = () => {
        successMessage("Sesión cerrada", "Sesión cerrada correctamente");
        location.reload();
    };
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark navbar-secondary">
                <div className="container">
                    <Link to={`/`} className="navbar-brand">
                        <span className="brand-text font-weight-light">Krystal App</span>
                    </Link>

                    <button
                        className="navbar-toggler order-1"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul className="navbar-nav">
                            {isLogged ? (<>
                                <li className="nav-item">
                                    <Link to={`/inventario`} href="index3.html" className="nav-link">
                                        Inventario <i className="ri-box-3-line"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Contact
                                    </a>
                                </li>

                            </>) : null}
                        </ul>

                        <form className="form-inline ml-0 ml-md-3">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="text"
                                    readOnly
                                    value={dateTime}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="ri-time-line"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                        {isLogged ? (
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-info dropdown-toggle dropdown-icon"
                                    data-toggle="dropdown"
                                >
                                    Sesión iniciada como {userData?.username}{" "}
                                </button>
                                <div className="dropdown-menu">
                                    <Link to={`/change-password`} className="dropdown-item" href="#">
                                        Cambiar contraseña{" "}<i className="ri-shield-keyhole-line"></i>
                                    </Link>
                                    <hr className="dropdown-divider"/>
                                    <a onClick={salir} className="dropdown-item">
                                        Salir <i className="ri-door-closed-line"></i>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="btn-group nav-item"
                                role="group"
                                aria-label="Basic example"
                            >
                                <Link to={`/login`} type="button" className="btn btn-secondary">
                                    Entrar <i className="ri-door-lock-line"></i>
                                </Link>
                                <Link
                                    to={`/register`}
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Registrarse <i className="ri-user-add-line"></i>
                                </Link>
                            </div>
                        )}
                    </ul>
                </div>
            </nav>
            <br/>
        </div>
    );
};

Navbar.propTypes = {
    dateTime: PropTypes.string.isRequired,
};

export default Navbar;
