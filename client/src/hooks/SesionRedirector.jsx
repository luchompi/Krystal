import { useEffect } from "react";
import sesionStore from "../stores/sesion.store";
import { useNavigate } from "react-router-dom";

export const RedirectIfAuth = () => {
  const { isLogged } = sesionStore((state) => state);
  const url = useNavigate();
  useEffect(() => {
    isLogged ? url("/dashboard") : null;
  });
  return <div />;
};

export const RedirectIfAuthRequired = () => {
  const { isLogged } = sesionStore((state) => state);
  const url = useNavigate();
  useEffect(() => {
    isLogged ? null : url("/login");
  });
  return <div />;
};
