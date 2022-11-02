const Header = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center px-3 py-3 mb-3" style={{backgroundColor: "#063970"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" style={{color: "#ffff00"}}>
                <span className="fs-4"><i className="bi bi-droplet"></i> Doctor Online</span>   
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
                <li className="nav-item"><a href="/especialidades" className="nav-link">Especialidades</a></li>
                <li className="nav-item"><a href="/doctores" className="nav-link">Doctores</a></li>
                <li className="nav-item"><a href="/citas" className="nav-link">Citas</a></li>
            </ul>
        </header>
    )
}

export default Header;