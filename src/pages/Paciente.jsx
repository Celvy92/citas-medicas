import React, { useState } from "react";

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

      <form onSubmit={agregarPaciente} style={{ marginBottom: "2rem" }}>
        <h2>Agregar nuevo paciente</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}>
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
          <button type="submit" style={{ cursor: "pointer" }}>Agregar paciente</button>
        </div>
      </form>

      <h2>Lista de pacientes</h2>
      {pacientes.length === 0 ? (
        <p>No hay pacientes registrados.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#0078d7", color: "white" }}>
              <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Nombre</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Teléfono</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Correo</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map(({ id, nombre, telefono, email }) => (
              <tr key={id} style={{ textAlign: "center" }}>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{nombre}</td>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{telefono}</td>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
