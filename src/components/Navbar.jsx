
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="https://www.meram.bel.tr/" id="navbar">AnaSayfa <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item" id="navbar">
                            <a className="nav-link text-light" href="https://www.meram.bel.tr/">Projelerimiz</a>
                        </li>
                        <a className="navbar-brand" href="https://www.meram.bel.tr/">
                            <img src="https://www.meram.bel.tr/assets/img/logo.svg" width="75" height="75" className="d-inline-block align-top" alt="logo" /></a>
                        <li className="nav-item" id="navbar">
                            <a className="nav-link text-light" href="https://www.meram.bel.tr/">Hizmetlerimiz</a>
                        </li>
                        <li className="nav-item" id="navbar">
                            <a className="nav-link text-light" href="https://www.meram.bel.tr/">Hakkımızda</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar