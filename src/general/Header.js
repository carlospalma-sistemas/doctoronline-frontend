const Header = () => {
    return (
        <div className="px-4">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Doctor Online</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
                    <li className="nav-item"><a href="/especialidades" className="nav-link">Especialidades</a></li>
                    <li className="nav-item"><a href="/doctores" className="nav-link">Doctores</a></li>
                    <li className="nav-item"><a href="/citas" className="nav-link">Citas</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;