const Navbar = () => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <nav
            className="navbar navbar-expand-lg bg-white shadow-sm px-4"
        >

            <div className="container-fluid">

                <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Buscar..."
                />

                <div className="ms-auto">

                    <span className="fw-bold">
                        {user?.nombres}
                    </span>

                    <span className="text-secondary ms-2">
                        {user?.rol}
                    </span>

                </div>

            </div>

        </nav>

    );
};

export default Navbar;