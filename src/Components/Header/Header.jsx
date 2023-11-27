import "../Header/Header.css"

function Header() {
    return (
        <>
            <header className="header">
                <nav className="navbar navegacion navbar-expand-lg navegacion d-flex align-items-center">
                </nav>
            </header>
        
            <div className="hero p-3">
                <div className="content">
                    <h2>Bienvenidos al Hotel Mirabell</h2>
                    <p>El destino perfecto para tus vacaciones</p>
                    <a href="#formularioTitulo" className="btn botonHero">Reservación</a>
                </div>
            </div>
        </>
    );
}

export default Header;