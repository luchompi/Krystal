import React, { useEffect, useState } from "react";
import CardLayout from "../../layouts/CardLayout";
import EditDocument from "../../assets/json/EditDocument.json";
import Form from "./Form";
import EventEmitter from "../../services/EventEmitter";
import InventarioHook from "../../hooks/InventarioHook";
const CreateForm = () => {
  const { guardarElemento } = InventarioHook();

  useEffect(() => {
    EventEmitter.addListener("create", (data) => {
      guardarElemento(data);
    });
    return () => {
      EventEmitter.removeAllListeners("create");
    };
  }, [guardarElemento]);
  return (
    <>
      <Form />
    </>
  );
};

const Create = () => {
  return (
    <div className="col col-lg-6">
      <CardLayout
        title="Crear producto"
        header="Formulario de creación de productos"
        icon={EditDocument}
        component={<CreateForm />}
      />
    </div>
  );
};

export default Create;
