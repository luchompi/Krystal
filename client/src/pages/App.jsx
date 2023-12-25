import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
