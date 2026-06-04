import React, { useState, useEffect } from 'react';
import { Login } from './views/Auth/Login.jsx';
import { getCurrentUser, logout } from './services/authService';

export default function App() {
  const [user, setUser] = useState(null);

  // Al cargar la app, verifica si ya hay una sesión activa en el navegador
  useEffect(() => {
    const loggedUser = getCurrentUser();
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  // Si no está logueado, muestra la pantalla de Login exclusivamente
  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
      <div style={{ padding: '2rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h1>SICOLO - Panel de Control</h1>
          <div>
            <span>Bienvenido, <strong>{user.nombres}</strong> ({user.rol})</span>
            <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Cerrar Sesión</button>
          </div>
        </header>

        <main>
          {/* REGLA 1: Solo el rol ADMIN puede ver y usar el módulo de creación */}
          {user.rol === 'ADMIN' && (
              <section style={{ border: '1px solid green', padding: '1rem', marginBottom: '1rem' }}>
                <h3>[MÓDULO ADMIN] Registro de Personal Permanente y Locadores</h3>
                <p>Aquí va el formulario compuesto que creamos en Spring Boot para registrar usuarios y sus Órdenes de Servicio.</p>
                <button>Registrar Nuevo Colaborador</button>
              </section>
          )}

          {/* REGLA 2: Supervisor y Locador ven la zona operativa de asistencia y entregables */}
          {(user.rol === 'SUPERVISOR' || user.rol === 'LOCADOR') && (
              <section style={{ border: '1px solid blue', padding: '1rem' }}>
                <h3>[MÓDULO OPERATIVO] Gestión de Evidencias y Asistencia</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '1rem' }}>
                    Marcar Ingreso / Salida
                  </button>
                  <button style={{ backgroundColor: '#17a2b8', color: '#fff', padding: '1rem' }}>
                    Subir Archivo Entregable
                  </button>
                  <button style={{ backgroundColor: '#ffc107', padding: '1rem' }}>
                    Registrar Avance Diario
                  </button>
                </div>
              </section>
          )}
        </main>
      </div>
  );
}