import CardLayout from "../layouts/CardLayout";
import Cloud from "../assets/json/Cloud.json";

const Loading = () => {
    return (
        <div className="col col-lg-6">
            <CardLayout
                icon={Cloud}
                header={"Procesando"}
                title={"Estamos procesando su solicitud..."}
                text={"Espere mientras se realizan algunas tareas."}
            />
        </div>
    );
};

export default Loading;
