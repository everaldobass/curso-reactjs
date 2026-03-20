function Escolha({nivel}){

    // Estrutura de escolha
    switch(nivel){

        case 1:
            return <h1>Safira</h1>;
        case 2:
            return <h1>Rubi</h1>;
        
        case 3:
        return <h1>Diamante</h1>;

        default:
            return <h1>Não existe</h1>;
    }

}

// Expotar
export default Escolha;