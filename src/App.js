import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Formulario from "./components/Formulario"
import Galeria from "./components/Galeria"
import SobreMi from "./components/SobreMi"
import Contactame from "./components/Contactame"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" ><NavBar /></Route>
        <Route path="/" ><Home /></Route>
        <Route path="/"><Formulario /></Route>
        <Route path="/galeria" ><Galeria /></Route>
        <Route path="/sobreMi" ><SobreMi /></Route>
        <Route path="/contactame" ><Contactame /></Route>
    </BrowserRouter>
  )
}

export default App;
