import { useState } from "react";

// Componente
function Estado(){

    // Variavel
    //let texto = "Olá mundo!";
    const[texto, setTexto] = useState("Olá mundo!")

    // Função para alterar o texto
    function alterarTexto() {
        
        //texto = "Texto foi alterado!";
        //alert(texto);
        setTexto("O Texto, olá mundo foi alterado")
    }

    // Retorno
    return(

        <>

        <h1>{texto}</h1>
        <button onClick={alterarTexto}> Alterar Texto </button>


        </>

    );
}

export default Estado;