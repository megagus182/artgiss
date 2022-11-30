

export default function NavBar() {

return(
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="www.google.com">ArtGiss</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="www.google.com">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="www.google.com">Sobre mi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="www.google.com">Galeria</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Algo mas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="www.google.com">Action</a></li>
              <li><a class="dropdown-item" href="www.google.com">Another action</a></li>
              <li><a class="dropdown-item" href="www.google.com">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

}