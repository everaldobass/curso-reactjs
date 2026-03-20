import { useState } from "react";
// Componente
function Formulario() {

    // State
    const[texto, setTexto] = useState("");

    // Extrair o valor do imput função
    const valorInput = (e) => {
        setTexto(e.target.value);
        //console.log(e.target);
    }

    // Retorno
    return(
        <form>
            <h1>{texto}</h1>
            <input type="text" onChange={valorInput} />
        </form>
    );
}

// Exportar
export default Formulario;