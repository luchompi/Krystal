import CardLayout from '../../layouts/CardLayout';
import ICON from '../../assets/json/Icon.json';
import BoxWarning from '../../components/BoxWarning';
import BoxDanger from '../../components/BoxDanger';
import sesionStore from '../../stores/sesion.store';
import inventarioStore from '../../stores/inventario.store.js';

const DashboardComponent = () => {
  const { inventario } = inventarioStore((state) => state);
  const lowUnits = inventario.filter(
    (item) => item.cantidad <= 20 && item.cantidad >= 1
  );
  const outUnits = inventario.filter((item) => item.cantidad === 0);
  return (
    <>
      <h6>Hasta ahora, de los elementos en sistema</h6>
      <div className="row justify-content-md-center">
        <div className="col col-lg-5">
          <BoxWarning productos={lowUnits} />
        </div>
        <div className="col col-lg-5">
          <BoxDanger productos={outUnits} />
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  const { isLogged } = sesionStore((state) => state);

  return (
    <div>
      {isLogged ? (
        <CardLayout
          icon={ICON}
          header="Panel de administración"
          title="Panel de información general"
          component={<DashboardComponent />}
        />
      ) : (
        <CardLayout
          icon={ICON}
          header="Krystal App"
          title="¡Bienvenido a krystal!"
        />
      )}
    </div>
  );
};

export default Dashboard;
