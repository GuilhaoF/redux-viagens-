import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Header() {
  //state.[nome do reducer]
  const reserves = useSelector((state) => state.Reserve.length);

  return (
    <header className="header-container">
      <Link to="/">Rdux - Hotel</Link>
      <Link to="/reservas" className="reserva">
        Reservas
      </Link>
      <span>{reserves} Reservas</span>
    </header>
  );
}
