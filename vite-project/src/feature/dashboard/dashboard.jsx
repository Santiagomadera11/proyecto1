import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar el estado si manejas auth
    navigate('/login'); // Redirige al login
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bienvenido al Dashboard</h1>
        <p>Administra tus documentos, usuarios y configuraciones.</p>

        <button className="Btn" onClick={handleLogout}>
          <div className="sign">
            <svg viewBox="0 0 512 512" height="20" width="20" fill="currentColor">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="text">Logout</div>
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📄 Documentos</h3>
          <p>Ver, editar o eliminar documentos.</p>
          <button>Ir a Documentos</button>
        </div>
        <div className="dashboard-card">
          <h3>👥 Usuarios</h3>
          <p>Gestiona las cuentas de los usuarios.</p>
          <button>Ir a Usuarios</button>
        </div>
        <div className="dashboard-card">
          <h3>⚙️ Configuración</h3>
          <p>Cambia preferencias del sistema.</p>
          <button>Ir a Configuración</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
