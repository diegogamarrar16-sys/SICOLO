import Layout from "../../components/Layout";

import { useNavigate } from "react-router-dom";

const UsuarioList = () => {

    const navigate = useNavigate();

    return (

        <Layout>

            <div className="d-flex justify-content-between mb-4">

                <h2>Usuarios</h2>

                <button
                    className="btn btn-primary"
                    onClick={() =>
                        navigate("/usuarios/nuevo")
                    }
                >
                    Nuevo Usuario
                </button>

            </div>

        </Layout>
    );
};

export default UsuarioList;