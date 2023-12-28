import CardLayout from "../../layouts/CardLayout";
import Link from "../../assets/json/Link.json";
import { useParams, useNavigate } from "react-router-dom";
import { activar } from "../../apis/auth.apis";
import { errorMessage, successMessage } from "../../components/messages";
import sesionStore from "../../store/sesion.store";
const ActivateComponent = () => {
  const { uid, token } = useParams();
  const url = useNavigate();
  const { alterLoading } = sesionStore((state) => state);
  const activate = async () => {
    alterLoading(true);
    await activar({ uid, token })
      .then((Response) => {
        successMessage(
          "¡Hecho!",
          "Su cuenta ha sido activada correctamente. Ya puede iniciar sesión."
        );
        alterLoading(false);
        url("/login");
      })
      .catch((error) => {
        errorMessage(error.response.data);
      })
      .finally(() => {
        alterLoading(false);
      });
  };
  return (
    <>
      <p>
        Para activar su cuenta, por favor haga clic{" "}
        <button className="btn btn-outline-success" onClick={activate}>
          Aquí
        </button>
      </p>
    </>
  );
};

const Activate = () => {
  document.title = "Activar cuenta | Krystal App";
  return (
    <div>
      <CardLayout
        header={"Activar cuenta"}
        title={"Solo un paso más para activar su cuenta."}
        component={<ActivateComponent />}
        icon={Link}
      />
    </div>
  );
};

export default Activate;
