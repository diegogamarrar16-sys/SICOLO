import axios from "axios";

const API_URL =
    "http://localhost:8080/api/usuarios";

export const crearUsuario = async (
    usuario
) => {

    const response =
        await axios.post(
            API_URL,
            usuario
        );

    return response.data;
};