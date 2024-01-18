import PropTypes from 'prop-types';
import { successMessage } from './messages';
import sesionStore from '../stores/sesion.store';
import { Link } from 'react-router-dom';

const Navbar = ({ dateTime }) => {
  const { isLogged, userData } = sesionStore((state) => state);

  const salir = () => {
    successMessage('Sesión cerrada', 'Sesión cerrada correctamente');
    location.reload();
  };
  return (
    <>
      <nav className=" navbar navbar-expand-md navbar-dark navbar-dark">
        <div className="container">
          <Link to={`/dashboard`} className="navbar-brand">
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
              {isLogged ? (
                <li className="nav-item">
                  <Link to={`/inventario`} className="nav-link">
                    Inventario
                  </Link>
                </li>
              ) : null}
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
                      <Link
                        to={`/forgot-password`}
                        className="dropdown-item"
                        href="#"
                      >
                        Cambiar contraseña
                      </Link>
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
                    <Link
                      to={`/register`}
                      type="button"
                      className="btn btn-outline-primary"
                    >
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
