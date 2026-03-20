import { useState } from "react";
// Componente
function FormularioDois() {

    // State
    const[formulario, setFormulario] = useState({
        nome:"",
        cidade:""
    });


    // Extrair o valor do imput função
    const valorInput = (e) => {
        const {name, value} = e.target;
        setFormulario({...formulario, [name]: value});
    }

    
    // Retorno
    return(
        <form>
            <h1>{formulario.nome}</h1>
            <h1>{formulario.cidade}</h1>
            <input type="text" name="nome" onChange={valorInput} />
            <input type="text" name="cidade" onChange={valorInput} />
        </form>
    );
}

// Exportar
export default FormularioDois;