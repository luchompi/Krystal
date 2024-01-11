import CardLayout from "../layouts/CardLayout";
import Server from "../assets/json/Server.json";

const Loading = () => {
  return (
    <div className="col col-lg-6">
      <CardLayout
        icon={Server}
        header={"Procesando petición"}
        title={"Espere..."}
        body={
          "Espere mientras se realizan algunas tareas, esto puede tomar unos minutos."
        }
      />
    </div>
  );
};

export default Loading;
