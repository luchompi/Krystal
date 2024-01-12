import PropTypes from "prop-types";
import {successMessage} from "./messages";
import sesionStore from "../stores/sesion.store";
import {Link} from "react-router-dom";

const Navbar = ({dateTime}) => {
    const {isLogged, userData} = sesionStore((state) => state);

    const salir = () => {
        successMessage("Sesión cerrada", "Sesión cerrada correctamente");
        location.reload();
    };
    return (
        <>
            <nav className=" navbar navbar-expand-md navbar-dark navbar-dark">
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
                            <li className="nav-item">
                                <a href="index3.html" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    id="dropdownSubMenu1"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle"
                                >
                                    Dropdown
                                </a>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    className="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            Some action{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">
                                            Some other action
                                        </a>
                                    </li>

                                    <li className="dropdown-divider"></li>

                                    <li className="dropdown-submenu dropdown-hover">
                                        <a
                                            id="dropdownSubMenu2"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            className="dropdown-item dropdown-toggle"
                                        >
                                            Hover for action
                                        </a>
                                        <ul
                                            aria-labelledby="dropdownSubMenu2"
                                            className="dropdown-menu border-0 shadow"
                                        >
                                            <li>
                                                <a tabIndex="-1" href="#" className="dropdown-item">
                                                    level 2
                                                </a>
                                            </li>

                                            <li className="dropdown-submenu">
                                                <a
                                                    id="dropdownSubMenu3"
                                                    href="#"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    className="dropdown-item dropdown-toggle"
                                                >
                                                    level 2
                                                </a>
                                                <ul
                                                    aria-labelledby="dropdownSubMenu3"
                                                    className="dropdown-menu border-0 shadow"
                                                >
                                                    <li>
                                                        <a href="#" className="dropdown-item">
                                                            3rd level
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="dropdown-item">
                                                            3rd level
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a href="#" className="dropdown-item">
                                                    level 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">
                                                    level 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <form className="form-inline ml-0 ml-md-3">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={dateTime}
                                    readOnly
                                />
                                <div className="input-group-append">
                                    <div className="btn btn-navbar">
                                        <i className="ri-timer-line"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                        <li className="nav-item">
                            {isLogged ? (
                                <>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-success">
                                            Sesión iniciada como {userData?.username}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success dropdown-toggle dropdown-icon"
                                            data-toggle="dropdown"
                                        >
                                            <span className="sr-only">Sesión iniciada</span>
                                        </button>
                                        <div className="dropdown-menu" role="menu">
                                            <a className="dropdown-item" href="#">
                                                Cambiar contraseña
                                            </a>
                                            <a className="dropdown-item" onClick={salir}>
                                                Cerrar sesión
                                            </a>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                    >
                                        <Link to={`/register`} type="button" className="btn btn-outline-primary">
                                            Registro
                                        </Link>
                                        <Link
                                            to={`/login`}
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            Entrar
                                        </Link>
                                    </div>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

Navbar.propTypes = {
    dateTime: PropTypes.string.isRequired,
};

export default Navbar;
