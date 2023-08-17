const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <nav class="navbar">
                    <img src="Asset/Logo.png" alt="" class="Logo" />

                    <ul class="nav-menu">
                        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Group</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Support</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;