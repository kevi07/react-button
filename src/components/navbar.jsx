const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    Navbar 
                    <span className="badge text-bg-secondary">
                        {totalCounters}
                    </span>
                </a>
            </nav>
     );
}
 
export default NavBar;