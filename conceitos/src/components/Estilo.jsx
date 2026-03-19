// Importando folhas de estilo
import { Fragment } from "react";
import "../assets/styles/Estilo.css";

// Componente estilo
function Estilo(){
    return(
        <Fragment>
            <p className="azul">Paragrafo 1</p>
            <p className="verde">Paragrafo 2</p>
            <p className="laranja">Paragrafo 3</p>
        </Fragment>
    );
}

export default Estilo;