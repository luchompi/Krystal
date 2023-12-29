import PropTypes from "prop-types";
import PlayOnce from "../components/Animations.jsx";

const CardLayout = ({header, title, text, component, icon}) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title m-0">{header}</h5>
                </div>
                <div className="card-body">
                    {/*Titulo de la card, la animación y el texto se ven como una fila unica*/}
                    <div className="card-title d-flex justify-content-between"
                         style={{alignSelf: "center", alignItems: "center", justifyContent: "center"}}>
                        <PlayOnce ICON={icon}/>
                        <h1>{title}</h1>
                    </div>
                    <div className="card-text">
                        {text || component}
                    </div>
                </div>
            </div>
        </div>
    );
};

CardLayout.propTypes = {
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    component: PropTypes.element,
    icon: PropTypes.object,
};

export default CardLayout;
