import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";
import sesionStore from "../store/sesion.store.js";
import Loading from "../components/Loading.jsx";
import {LogoutPreventor} from "../middleware/SesionMiddleware.jsx";

function App() {
    const [dateTime, setDateTime] = useState("");
    const {isLoading, incrementCounter, isLogged} = sesionStore((state) => state);
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date().toLocaleString());
            isLogged ? incrementCounter() : null;

        }, 1000);
        return () => clearInterval(interval);
    });
    LogoutPreventor()
    
    return (
        <>
            <Navbar dateTime={dateTime}/>
            <div className="row justify-content-md-center">
                {isLoading ? <Loading/> : <Outlet/>}
            </div>
        </>
    );
}

export default App;
