import React from 'react'

const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand ms-4" href="#">Métodos Turísticos</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>)
}

export default NavBar 