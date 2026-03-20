// importação
import { Activity, useState } from "react"

function Container(){
    // State
    const[visivel, setVisivel] = useState(true);

    // Funcao par intercalar
    function alterarVisibilidade(){
        //setVisivel(!visivel);
        setVisivel(valorAtual => !valorAtual);

    }

    //retorno
    return(
        <>
        <button onClick={alterarVisibilidade}>Clique aqui</button>

        <Activity mode={visivel ? "visible" : "hidden"}>
            <h1>Aprendendo utilizar o activity</h1>
        </Activity>
        </>
   
    );      
}


export default Container;