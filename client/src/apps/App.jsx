import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import sesionStore from "../store/sesion.store.js";
import Loading from "../components/Loading.jsx";

function App() {
  const [dateTime, setDateTime] = useState("");
  const { isLoading } = sesionStore((state) => state);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <Navbar dateTime={dateTime} />
      <div className="row justify-content-md-center">
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}

export default App;
