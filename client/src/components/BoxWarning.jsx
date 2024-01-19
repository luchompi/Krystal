import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BoxWarning = ({ productos }) => {
  return (
    <div>
      <div className="small-box bg-warning">
        <div className="inner">
          <h3>{productos.length}</h3>

          <p>Tienen poco stock</p>
        </div>
        <div className="icon">
          <i className="ri-line-chart-line"></i>
        </div>
        <Link to={`/inventario/pocas-unidades`} className="small-box-footer">
          Explorar <i className="ri-arrow-right-circle-line"></i>
        </Link>
      </div>
    </div>
  );
};

BoxWarning.propTypes = {
  productos: PropTypes.array,
};

export default BoxWarning;
