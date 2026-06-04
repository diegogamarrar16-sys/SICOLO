import axios from 'axios';

const API_URL = 'http://localhost:8080/api/usuarios';

export const login = async (dni, password) => {
    // Nota: Posteriormente crearemos un endpoint específico /api/auth/login en Spring Boot.
    // Por ahora, simularemos la verificación listando y buscando el DNI (para pruebas iniciales).
    const response = await axios.get(API_URL);
    const usuarios = response.data;

    // Buscamos si existe un usuario con ese DNI y contraseña
    const usuarioEncontrado = usuarios.find(
        (u) => u.dni === dni && u.password === password
    );

    if (usuarioEncontrado) {
        // Guardamos el usuario y su rol en el almacenamiento del navegador
        localStorage.setItem('user', JSON.stringify(usuarioEncontrado));
        return usuarioEncontrado;
    } else {
        throw new Error('Credenciales incorrectas');
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};