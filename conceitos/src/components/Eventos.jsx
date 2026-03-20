// Componentes
function Eventos(){

    return (

        <>

        <button onClick={function(){alert("Olá mundo!")}}>Clique aqui</button>
        <button onClick={() => alert("Aerofunction")}>Aerofunction</button>
        </>
    );
}

// Exportar
export default Eventos;