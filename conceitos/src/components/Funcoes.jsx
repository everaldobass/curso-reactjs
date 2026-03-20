// Componentes
function Funcoes(){

    function mensagem1(){
        alert("Mensagem 1");
    }

    const mensagem2 = () =>{
        alert("Mensagem2");
    }

    return(

        <>
                <button onClick={mensagem1}>Mensagem 1</button>
                <button onClick={mensagem2}>Mensagem 2</button>
        </>



    );

}

export default Funcoes;