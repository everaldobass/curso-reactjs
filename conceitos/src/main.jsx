// Importar componentes CreateRoot
import {createRoot} from "react-dom/client";
import PrimeiroComponente from "./components/PrimeiroComponente";
import Imagem from "./components/Imagem";
import Estilo from "./components/Estilo";
import Condicional from "./components/Condicional";
import Escolha from "./components/Escolha";
import Listagem from "./components/Listagem";
import Eventos from "./components/Eventos";
import Funcoes from "./components/Funcoes";
import Estado from "./components/Estado";
import Container from "./components/Container";
import Formulario from "./components/Formulario";
import FormularioDois from "./components/FormuarioDois";
import Props from "./components/Props";


// Exibir os componentes
createRoot(document.getElementById("root")).render(
    <Props nome="Everaldo" cidade="Jundiai" idade={36}/>
);