import CardLayout from "../../layouts/CardLayout.jsx";
import LinkIcon from '../../assets/json/LinkIcon.json'
import {useParams} from "react-router-dom";
import SesionHook from "../../hooks/SesionHooks.jsx";

const ActivateComponent = () => {
    const {uid, token} = useParams()
    const {activateAccount} = SesionHook()

    const handleClick = (e) => {
        e.preventDefault()
        activateAccount({uid, token})
    }
    return (<>
        <div className="container">
            <h4>Está a punto de activar su cuenta.</h4>
            <p>Para proceder, haga clic <button onClick={handleClick}
                                                className="btn btn-outline-success">Aquí</button>
            </p>
        </div>
    </>)
}


const Activate = () => {
    return (<div className="col col-lg-6">
        <CardLayout icon={LinkIcon} header={"Activar cuenta"} title={"Solo un paso más..."}
                    component={<ActivateComponent/>}/>
    </div>)
}


export default Activate