import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";
import sesionStore from "./stores/sesion.store.js";
import Loading from "./components/Loading.jsx";
import SesionHook from "./hooks/SesionHooks.jsx";

const App = () => {
    const [dateTime, setDateTime] = useState("");
    const {loading, isLogged, timer, incrementTimer, userData} = sesionStore(
        (state) => state
    );
    const {requestNewPat, getUserInfo} = SesionHook();
    getUserInfo()
    requestNewPat();
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date().toLocaleString());
            isLogged && incrementTimer();
        }, 1000);
        return () => clearInterval(interval);
    }, [incrementTimer, isLogged, timer, requestNewPat]);
    return (
        <>
            <Navbar dateTime={dateTime}/>
            <div className="row justify-content-center mt-2">
                {loading ? <Loading/> : <Outlet/>}
            </div>
        </>
    );
};

export default App;
