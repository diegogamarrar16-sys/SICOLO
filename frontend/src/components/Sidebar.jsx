import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const rol = user?.rol || "SUPERADMIN";

    return (
        <div
            className="bg-dark text-white d-flex flex-column"
            style={{
                width: "260px",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0
            }}
        >

            <div className="p-4 border-bottom">
                <h2 className="fw-bold mb-0">
                    SICOLO
                </h2>

                <small className="text-secondary">
                    {rol}
                </small>
            </div>

            <div className="p-3">

                <ul className="nav flex-column">

                    <Link
                        to="/dashboard"
                        className="nav-link text-white"
                    >
                        🏠 Dashboard
                    </Link>

                    {rol === "SUPERADMIN" && (
                        <>
                            <Link
                                to="/usuarios"
                                className="nav-link text-white"
                            >
                                👥 Usuarios
                            </Link>
                            <Link
                                to="/areas"

                                className="nav-link     text-white"
                            >
                                🏢 Áreas
                            </Link>
                        </>
                    )
                    }
                    <Link
                        to="/locadores" className="nav-link text-white"
                    >
                            📋 Locadores

                    </Link>

                    <Link to="/asistencias" className="nav-link text-white">
                            🕒 Asistencias
                    </Link>

                    <Link to="/entregables" className="nav-link text-white">
                            📄 Entregables

                    </Link>

                    <Link to="/reportes" className="nav-link text-white">
                            📊 Reportes

                    </Link>

                    <Link to="/auditoria" className="nav-link text-white">
                            📝 Auditoría

                    </Link>

                </ul>
            </div>

            <div className="mt-auto p-3">
                <button
                    className="btn btn-danger w-100"
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </div>

        </div>
    );
};

export default Sidebar;