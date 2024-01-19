import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BoxDanger = ({ productos }) => {
  return (
    <div>
      <div className="small-box bg-danger">
        <div className="inner">
          <h3>{productos.length}</h3>
          <p>Están sin stock</p>
        </div>
        <div className="icon">
          <i className="ri-alarm-warning-fill"></i>
        </div>
        <Link to={`/inventario/sin-unidades`} className="small-box-footer">
          Explorar <i className="ri-arrow-right-circle-line"></i>
        </Link>
      </div>
    </div>
  );
};

BoxDanger.propTypes = {
  productos: PropTypes.array,
};

export default BoxDanger;
