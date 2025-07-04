import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PacienteDetalle() {
  const { id } = useParams();

  return (
    <section>
      <h1>Detalle del Paciente</h1>
      <p>ID del paciente: <strong>{id}</strong></p>
      <p>Aquí puedes agregar más detalles, historial clínico u otra información relevante del paciente.</p>

      <Link to="/paciente" className="btn-link">
        ← Volver a la lista de pacientes
      </Link>
    </section>
  );
}
