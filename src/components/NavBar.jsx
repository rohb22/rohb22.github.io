const NavBar = () => {
    return (
        <div className="fixed navbar p-5 bg-white/50 border-b border-black/15 z-50 backdrop-blur-md shadow-sm">
            <div className="flex-1 flex">
                <a className="btn btn-ghost text-xl px-0 gap-0" href="#home">
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                    </span>
                    Rohb
                </a>
            </div>

            <div className="hidden sm:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
