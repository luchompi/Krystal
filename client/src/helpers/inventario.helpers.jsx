import { useNavigate } from "react-router-dom";
import { crearElemento } from "../apis/inventario.apis";
import { errorMessage, successMessage } from "../components/messages";

export const SaveElemento = async (data) => {
  const navigate = useNavigate();
  await crearElemento(data)
    .then((Response) => {
      successMessage("Hecho", "Resitro creado con éxito");
      navigate("/inventario");
    })
    .catch((error) => {
      errorMessage(error.response.data);
    });
};
