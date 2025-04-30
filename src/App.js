import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Formulario from "./components/Formulario";
import Galeria from "./components/Galeria";
import SobreMi from "./components/SobreMi";
import Contactame from "./components/Contactame";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Formulario} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/sobreMi" component={SobreMi} />
        <Route path="/contactame" component={Contactame} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;