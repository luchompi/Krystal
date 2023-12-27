import CardLayout from "../../layouts/CardLayout";
import { Outlet } from "react-router-dom";
import ICON from "../../assets/json/ICON.json";
const PrincipalLayout = () => {
  return (
    <div className="col col-lg-6">
      <CardLayout
        header="Bienvenido"
        title="Krystal App"
        icon={ICON}
        component={<Outlet />}
      />
    </div>
  );
};

export default PrincipalLayout;
