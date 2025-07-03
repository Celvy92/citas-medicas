import React, { useState } from "react";

export default function Citas() {
  const [citas, setCitas] = useState([
    { id: 1, paciente: "Juan Pérez", fecha: "2025-07-10", hora: "10:00 AM" },
    { id: 2, paciente: "María López", fecha: "2025-07-11", hora: "11:30 AM" },
  ]);

  const [nuevoPaciente, setNuevoPaciente] = useState("");
  const [nuevaFecha, setNuevaFecha] = useState("");
  const [nuevaHora, setNuevaHora] = useState("");

  const agregarCita = (e) => {
    e.preventDefault();
    if (!nuevoPaciente || !nuevaFecha || !nuevaHora) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevaCita = {
      id: citas.length + 1,
      paciente: nuevoPaciente,
      fecha: nuevaFecha,
      hora: nuevaHora,
    };

    setCitas([...citas, nuevaCita]);
    setNuevoPaciente("");
    setNuevaFecha("");
    setNuevaHora("");
  };

  return (
    <section>
      <h1>Gestión de Citas</h1>

      <form onSubmit={agregarCita} style={{ marginBottom: "2rem" }}>
        <h2>Agregar nueva cita</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}>
          <input
            type="text"
            placeholder="Nombre del paciente"
            value={nuevoPaciente}
            onChange={(e) => setNuevoPaciente(e.target.value)}
            required
          />
          <input
            type="date"
            value={nuevaFecha}
            onChange={(e) => setNuevaFecha(e.target.value)}
            required
          />
          <input
            type="time"
            value={nuevaHora}
            onChange={(e) => setNuevaHora(e.target.value)}
            required
          />
          <button type="submit" style={{ cursor: "pointer" }}>Agregar cita</button>
        </div>
      </form>

      <h2>Lista de citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas programadas.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#0078d7", color: "white" }}>
              <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Paciente</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Fecha</th>
              <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Hora</th>
            </tr>
          </thead>
          <tbody>
            {citas.map(({ id, paciente, fecha, hora }) => (
              <tr key={id} style={{ textAlign: "center" }}>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{paciente}</td>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{fecha}</td>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>{hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
