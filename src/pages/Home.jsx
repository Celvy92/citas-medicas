import gestionImg from "../assets/gestion-medica.jpg";
import "../App.css";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1 className="titulo-home">Bienvenido a la Plataforma de Gestión de Citas Médicas</h1>
        <p className="descripcion-home">
          Organiza, gestiona y administra tus citas médicas con eficiencia. Navega por el menú para comenzar.
        </p>

        {/* Esta es la línea que debes modificar */}
        <div className="home-image">
          <img src={gestionImg} alt="Gestión Médica" />
        </div>
      </div>
    </section>
  );
}
