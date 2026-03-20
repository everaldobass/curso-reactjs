// Componente
function Condicional({media}){

    // Condicional
    if(media >= 8 ){
        return (<h1>Aprovado</h1>);
    } else {
        return (<h1>Reprovado</h1>);
    }

}

// Exportar
export default Condicional;