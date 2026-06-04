
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import UsuarioList from "./pages/usuarios/UsuarioList";
import UsuarioForm from "./pages/usuarios/UsuarioForm";
import AreaList from "./pages/areas/AreaList";
import LocadorList from "./pages/locadores/LocadorList";
import AsistenciaList from "./pages/asistencias/AsistenciaList";
import EntregableList from "./pages/entregables/EntregableList";
import ReporteList from "./pages/reportes/ReporteList";
import AuditoriaList from "./pages/auditoria/AuditoriaList.jsx";
import Login from "./Auth/Login.jsx";


function App() {

  return (
      <BrowserRouter>

        <Routes>

          <Route
              path="/"
              element={<Navigate to="/dashboard" />}
          />

          <Route
              path="/dashboard"
              element={<Dashboard />}
          />

          <Route
              path="/usuarios"
              element={<UsuarioList />}
          />

          <Route
              path="/areas"
              element={<AreaList />}
          />

          <Route
              path="/locadores"
              element={<LocadorList />}
          />

          <Route
              path="/asistencias"
              element={<AsistenciaList />}
          />

          <Route
              path="/entregables"
              element={<EntregableList />}
          />

          <Route
              path="/reportes"
              element={<ReporteList />}
          />

          <Route
              path="/auditoria"
              element={<AuditoriaList />}
          />

          <Route
              path="/login"
              element={<Login />}
          />

          <Route
              path="/usuarios/nuevo"
              element={<UsuarioForm />}
          />

        </Routes>

      </BrowserRouter>
  );
}

export default App;