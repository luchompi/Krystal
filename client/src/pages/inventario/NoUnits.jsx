import Deny from '../../assets/json/Deny.json';
import CardLayout from '../../layouts/CardLayout';
import inventarioStore from '../../stores/inventario.store';
const NoUnits = () => {
  const { inventario } = inventarioStore();
  const noUnits = inventario.filter((item) => item.cantidad === 0);
  return (
    <div>
      <CardLayout
        icon={Deny}
        header={'Registro de unidades sin existencia'}
        title={'Elementos no disponibles'}
        component={
          <>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                </tr>
              </thead>
              <tbody>
                {noUnits.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.id}</strong>
                    </td>
                    <td>
                      <strong>{item.nombre}</strong>
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

export default NoUnits;
