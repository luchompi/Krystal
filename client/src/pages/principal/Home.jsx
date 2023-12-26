import CardLayout from "../../layout/CardLayout";
import ICON from "../../assets/json/ICON.json";
const HomePage = () => {
  return (
    <div>
      <CardLayout
        cardIcon={ICON}
        cardHeader={"Krystal"}
        cardText={"Su sistema de inventario y facturación"}
        cardTitle={"¡Bienvenido a Krystal!"}
      />
    </div>
  );
};

export default HomePage;
