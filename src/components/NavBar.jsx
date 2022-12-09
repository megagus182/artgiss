import { Link } from "react-router-dom";

export default function NavBar() {

return(
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#6ca7ff"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="/">ArtGiss</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link to={`/`}> <a class="nav-link active" aria-current="page" href="/">Home</a></Link>
          </li>
          <li class="nav-item">
          <Link to={`/sobremi`}> <a class="nav-link" href="/sobreMi">Sobre mi</a></Link>
          </li>
          <li class="nav-item">
          <Link to={`/galeria`}><a class="nav-link" href="/galeria">Galeria</a></Link>
          </li>
          <li class="nav-item">
          <Link to={`/contactame`}><a class="nav-link" href="/contactame">Contacto</a></Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="mis_redes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mis Redes Sociales
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.facebook.com/Art.giss">Facebook</a></li>
              <li><a class="dropdown-item" href="https://www.instagram.com/art.giss.x3/">Instagram</a></li>
              <li><a class="dropdown-item" href="https://www.tiktok.com/@gissx3">TikTok</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

}