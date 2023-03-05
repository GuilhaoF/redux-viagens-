import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/">Rdux - Hotel</Link>
      <Link to="/reservas" className="reserva">
        Minhas Reservas
      </Link>
    </header>
  );
}
