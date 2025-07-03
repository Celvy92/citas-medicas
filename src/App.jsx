import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Citas from "./pages/Citas";
import Paciente from "./pages/Paciente";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
          <NavLink to="/citas" className={({ isActive }) => isActive ? "active" : ""}>Citas</NavLink>
          <NavLink to="/paciente" className={({ isActive }) => isActive ? "active" : ""}>Pacientes</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/paciente" element={<Paciente />} />
        </Routes>
      </main>

      <footer className="footer">
        &copy; 2025 Clínica React | Gestión de Citas Médicas
      </footer>
    </BrowserRouter>
  );
}
