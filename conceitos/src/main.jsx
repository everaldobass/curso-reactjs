// Importar componentes CreateRoot
import {createRoot} from "react-dom/client";
import PrimeiroComponente from "./components/PrimeiroComponente";
import Imagem from "./components/imagen";


// Exibir os componentes
createRoot(document.getElementById("root")).render(

    <Imagem />
);