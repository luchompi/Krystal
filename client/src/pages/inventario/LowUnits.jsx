import CardLayout from '../../layouts/CardLayout';
import inventarioStore from '../../stores/inventario.store';
import Ambulance from '../../assets/json/Ambulance.json';
import { Link } from 'react-router-dom';

const LowUnits = () => {
  const { inventario } = inventarioStore();
  const lowUnits = inventario.filter(
    (item) => item.cantidad <= 20 && item.cantidad >= 1
  );
  return (
    <div>
      <CardLayout
        icon={Ambulance}
        header={'Registro de pocas existencias'}
        title={'Considere reabastecer existencias'}
        cardTools={
          <div className="card-tools">
            <Link to={`/dashboard`} className="btn btn-secondary">
              Atrás <i className="ri-arrow-left-line"></i>
            </Link>
          </div>
        }
        component={
          <>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {lowUnits.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.nombre}</strong>
                    </td>
                    <td>
                      <strong>{item.cantidad}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
      />
    </div>
  );
};

export default LowUnits;
