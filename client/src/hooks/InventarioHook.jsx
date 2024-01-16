import { useNavigate } from "react-router-dom";
import sesionStore from "../stores/sesion.store";
import inventarioStore from "../stores/inventario.store";
import {
  deleteElement,
  getInventario,
  saveElement,
  updateAllInventory,
  updateElement,
} from "../apis/inventario.apis";
import {
  confirmMessage,
  errorMessage,
  infoMessage,
  successMessage,
} from "../components/messages";

const InventarioHook = () => {
  const url = useNavigate();
  const { isLogged, alterLoading } = sesionStore((state) => state);
  const { setInventario, removeInventario } = inventarioStore((state) => state);

  const getAllData = () => {
    getInventario()
      .then((Response) => {
        setInventario(Response.data);
      })
      .catch((error) => {
        errorMessage(error);
      });
  };

  const guardarElemento = (data) => {
    alterLoading(true);

    saveElement(data)
      .then(() => {
        getAllData();
        successMessage("¡Hecho!", "Elemento guardado correctamente");
        alterLoading(false);
        url("/inventario");
      })
      .catch((error) => {
        errorMessage(error);
        alterLoading(false);
      });
  };

  const eliminarElemento = (id) => {
    alterLoading(true);
    confirmMessage(
      "Eliminar Elemento",
      `¿Está seguro de eliminar este elemento con código ${id}?`,
      "Sí, proceder",
      "No, cancelar",
      async () => {
        await deleteElement(id)
          .then((Response) => {
            infoMessage("¡Hecho!", "Elemento eliminado correctamente");
            removeInventario(id);
          })
          .catch((error) => {
            errorMessage(error);
          });
      }
    );
    alterLoading(false);
  };

  const actualizarElemento = (id, data) => {
    alterLoading(true);
    updateElement(id, data)
      .then((Response) => {
        infoMessage("¡Hecho!", "Elemento actualizado correctamente");
        getAllData();
        alterLoading(false);
        url("/inventario");
      })
      .catch((error) => {
        errorMessage(error);
        alterLoading(false);
      });
  };

  const actualizacionGeneral = (data) => {
    alterLoading(true);
    let obj = [];
    data.forEach((item) => {
      item.Stock &&
        obj.push({ id: item.cod, nombre: item.Nombre, cantidad: item.Stock });
    });
    updateAllInventory(data)
      .then(() => {
        successMessage("¡Hecho!", "Inventario actualizado correctamente");
      })
      .catch((error) => {
        errorMessage(error);
      });
    alterLoading(false);
  };
  return {
    getAllData,
    guardarElemento,
    eliminarElemento,
    actualizarElemento,
    actualizacionGeneral,
  };
};

export default InventarioHook;
