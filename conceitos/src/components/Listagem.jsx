function Listagem(){

    // nome
    const nomes = ["Laranja", "Uva", "Abacaxi", "Maçã"];

    // Exibir listas
    return (
        <ul>
           {nomes.map((nome, indice) => (<li key={indice}>{nome}</li>))}
       </ul>
    );

}


// Exportar
export default Listagem;