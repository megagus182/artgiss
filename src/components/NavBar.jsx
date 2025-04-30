import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; 

export default function NavBar() {
    const location = useLocation();

    return(
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#fff", borderBottom: "1px solid #e0e0e0" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{ fontFamily: "Montserrat", fontWeight: "bold", color: "#333" }}>ArtGiss</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to={`/`} className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} aria-current="page" style={{ fontFamily: "Montserrat", color: "#555" }}>Home</Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to={`/sobremi`} className={`nav-link ${location.pathname === '/sobremi' ? 'active-link' : ''}`} style={{ fontFamily: "Montserrat", color: "#555" }}>Sobre mi</Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to={`/galeria`} className={`nav-link ${location.pathname === '/galeria' ? 'active-link' : ''}`} style={{ fontFamily: "Montserrat", color: "#555" }}>Galeria</Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to={`/contactame`} className={`nav-link ${location.pathname === '/contactame' ? 'active-link' : ''}`} style={{ fontFamily: "Montserrat", color: "#555" }}>Contacto</Link>
                        </li>
                        <li className="nav-item dropdown" style={{ marginRight: '15px' }}>
                            <a className="nav-link dropdown-toggle" href="mis_redes" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "Montserrat", color: "#555" }}>
                                Mis Redes Sociales
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.facebook.com/Art.giss" style={{ fontFamily: "Montserrat", color: "#555" }}>Facebook</a></li>
                                <li><a className="dropdown-item" href="https://www.instagram.com/art.giss.x3/" style={{ fontFamily: "Montserrat", color: "#555" }}>Instagram</a></li>
                                <li><a className="dropdown-item" href="https://www.tiktok.com/@gissx3" style={{ fontFamily: "Montserrat", color: "#555" }}>TikTok</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}