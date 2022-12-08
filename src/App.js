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
        <Route exact path="/" ><Home /></Route>
        <Route exact path="/"><Formulario /></Route>
        <Route exact path="https://artgis.netlify.app/galeria" ><Galeria /></Route>
        <Route exact path="https://artgis.netlify.app/sobreMi" ><SobreMi /></Route>
        <Route exact path="https://artgis.netlify.app/contactame" ><Contactame /></Route>
    </BrowserRouter>
  )
}

export default App;
