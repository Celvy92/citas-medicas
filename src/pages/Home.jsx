import React from "react";

export default function Home() {
  return (
    <section>
      <h1>Bienvenido a la Plataforma de Gestión de Citas Médicas</h1>
      <p>
        Esta aplicación te permite gestionar tus citas médicas de manera sencilla y eficiente.
      </p>
      <p>
        Navega a través de las pestañas para:
      </p>
      <ul>
        <li>Ver y administrar tus citas.</li>
        <li>Registrar y consultar datos de pacientes.</li>
      </ul>
      <img
        src="https://images.unsplash.com/photo-1588776814546-0f0c53f54d11?auto=format&fit=crop&w=800&q=60"
        alt="Gestión médica"
        style={{ width: "100%", borderRadius: "10px", marginTop: "1rem" }}
      />
    </section>
  );
}
