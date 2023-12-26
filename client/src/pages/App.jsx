import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";

const App = () => {
  const [dateTime, setDateTime] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Navbar dateTime={dateTime} />
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
