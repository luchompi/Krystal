import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import sesionStore from "../stores/sesion.store.js";
import SesionHook from "../hooks/SesionHooks.jsx";


const CircularProgressBar = () => {
  const {timer } = sesionStore((state) => state);
  const {requestNewPat} = SesionHook();
  let max = 1800;
  let value = (timer * 100) / max;
  value >= 50 ? requestNewPat() : null;
    return (
        <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={value} />
        </div>
    );
}


export default CircularProgressBar;
