import { useState } from "react";
import Layout from "../../components/Layout";

const UsuarioForm = () => {

    const [usuario, setUsuario] = useState({

        dni: "",
        nombres: "",
        apellidos: "",
        correo: "",
        password: "",
        idRol: ""

    });

    const handleChange = (e) => {

        setUsuario({

            ...usuario,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(usuario);

    };

    return (

        <Layout>

            <h2>Nuevo Usuario</h2>

            <form onSubmit={handleSubmit}>

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <label>DNI</label>

                        <input
                            type="text"
                            name="dni"
                            className="form-control"
                            value={usuario.dni}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label>Nombres</label>

                        <input
                            type="text"
                            name="nombres"
                            className="form-control"
                            value={usuario.nombres}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label>Apellidos</label>

                        <input
                            type="text"
                            name="apellidos"
                            className="form-control"
                            value={usuario.apellidos}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label>Correo</label>

                        <input
                            type="email"
                            name="correo"
                            className="form-control"
                            value={usuario.correo}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label>Contraseña</label>

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={usuario.password}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <label>Rol</label>

                        <select
                            name="idRol"
                            className="form-select"
                            value={usuario.idRol}
                            onChange={handleChange}
                        >
                            <option value="">
                                Seleccione
                            </option>

                            <option value="2">
                                ADMIN_OA
                            </option>

                            <option value="3">
                                ADMIN_TESO
                            </option>

                            <option value="4">
                                ADMIN_RRHH
                            </option>

                        </select>

                    </div>

                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Guardar
                </button>

            </form>

        </Layout>
    );
};

export default UsuarioForm;