import CardLayout from "../layouts/CardLayout.jsx";
import NotFound from '../assets/json/NotFound.json';

const Error404 = () => {
    return (<>
        <div className="col col-lg-6">
            <CardLayout icon={NotFound} header={"404 - Recurso no encontrado"} title={"Error 404 - Not Found"}
                        component={<>
                            <h6>
                                Bueno, esto es incómodo. Parece que el recurso que estás buscando no existe. Por favor,
                                revisa la URL y vuelve a intentarlo o puedes volver a la página de inicio haciendo
                                clic <button
                                className="btn btn-primary btn-sm btn-rounded">aquí</button>
                            </h6>
                        </>}/>
        </div>
    </>)
}

export default Error404;