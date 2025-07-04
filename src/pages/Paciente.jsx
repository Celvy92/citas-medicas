import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Paciente() {
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", telefono: "555-1234", email: "juan@example.com" },
    { id: 2, nombre: "María López", telefono: "555-5678", email: "maria@example.com" },
  ]);

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const agregarPaciente = (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const nuevoPaciente = {
      id: pacientes.length + 1,
      nombre,
      telefono,
      email,
    };
    setPacientes([...pacientes, nuevoPaciente]);
    setNombre("");
    setTelefono("");
    setEmail("");
  };

  return (
    <section>
      <h1>Gestión de Pacientes</h1>

      <form onSubmit={agregarPaciente} className="formulario">
        <h2>Agregar nuevo paciente</h2>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Agregar paciente</button>
      </form>

      <h2>Lista de pacientes</h2>
      {pacientes.length === 0 ? (
        <p>No hay pacientes registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map(({ id, nombre, telefono, email }) => (
              <tr key={id}>
                <td>{nombre}</td>
                <td>{telefono}</td>
                <td>{email}</td>
                <td>
                  <Link to={`/paciente/${id}`} className="btn-link">
                    Ver más
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
