import React, { useState } from 'react';
import { login } from '../../services/authService';
import '../../styles/Login.css';

export const Login = ({ onLoginSuccess }) => {
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
    const [area, setArea] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const areas = [
        { id: 1, nombre: 'Abastecimiento' },
        { id: 2, nombre: 'Recursos Humanos' },
        { id: 3, nombre: 'Tesorería' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const user = await login(dni, password, area);
            onLoginSuccess(user);
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sicolo-bg">
            {/* Logo lateral */}


            {/* Panel de login */}
            <div className="sicolo-panel">
                <div className="sicolo-logo">
                    <span className="logo-si">SI</span>
                    <span className="logo-co">CO</span>
                    <span className="logo-lo">LO</span>
                </div>
                <div>
                    <h1 className="panel-title">
                        SISTEMA DE CONTROL<br />DE LOCADORES
                    </h1>

                    <h2 className="panel-subtitle">Iniciar Sesión</h2>

                    {error && <div className="sicolo-error">{error}</div>}

                    <form onSubmit={handleSubmit} className="sicolo-form">
                        <div className="sicolo-field">
                            <label className="field-label">DNI:</label>
                            <input
                                className="field-input"
                                type="text"
                                maxLength="8"
                                value={dni}
                                onChange={(e) => setDni(e.target.value.replace(/\D/g, ''))}
                                required
                            />
                        </div>

                        <div className="sicolo-field">
                            <label className="field-label">CONTRASEÑA:</label>
                            <input
                                className="field-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="sicolo-field">
                        <label className="field-label">Area:</label>
                        <select
                            className="field-input field-select"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            required
                        >
                            
                            <option value="">Seleccione un área</option>

                            {areas.map((a) => (
                                <option key={a.id} value={a.id}>
                                    {a.nombre}
                                </option>
                            ))}
                        </select>
                        </div>
                        <div className="forgot-password">
                            <span className="forgot-link">OLVIDÉ MI CONTRASEÑA</span>
                        </div>

                        <button
                            type="submit"
                            className="sicolo-btn"
                            disabled={loading}
                        >
                            {loading ? 'INGRESANDO...' : 'INGRESAR'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
