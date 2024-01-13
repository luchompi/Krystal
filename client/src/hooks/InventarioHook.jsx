import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sesionStore from "../stores/sesion.store";
import inventarioStore from "../stores/inventario.store";
import { getInventario, saveElement } from "../apis/inventario.apis";
import { errorMessage, successMessage } from "../components/messages";
const InventarioHook = () => {
  const url = useNavigate();
  const { isLogged, alterLoading } = sesionStore((state) => state);
  const { setInventario, addInventario, deleteInventario, updateInventario } =
    inventarioStore((state) => state);

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
  return { getAllData, guardarElemento };
};

export default InventarioHook;
