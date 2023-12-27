import CardLayout from "../layouts/CardLayout";
import COMMS from "../assets/json/COMMS.json";
const Loading = () => {
  return (
    <div className="col col-lg-6">
      <CardLayout
        icon={COMMS}
        header={"Procesando"}
        title={"Estamos procesando su solicitud..."}
        text={"Espere mientras se realizan algunas tareas."}
      />
    </div>
  );
};

export default Loading;
