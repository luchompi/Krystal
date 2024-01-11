import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import sesionStore from "./stores/sesion.store.js";
import Loading from "./components/Loading.jsx";

const App = () => {
  const [dateTime, setDateTime] = useState("");
  const { loading } = sesionStore((state) => state);
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Navbar dateTime={dateTime} />
      <div className="row justify-content-center mt-2">
        {loading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
};

export default App;
