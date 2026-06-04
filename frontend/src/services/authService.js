import axios from 'axios';

export const login = async (
    dni,
    password,
    area
) => {

    const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        {
            dni,
            password,
            idArea: Number(area)
        }
    );

    localStorage.setItem(
        'user',
        JSON.stringify(response.data)
    );

    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};