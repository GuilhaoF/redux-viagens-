import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { MdFlightTakeoff } from "react-icons/md";
import "./styles.css";
import { addReserveRequest } from "../../store/modules/reserve/actions";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function LoadTripsApi() {
      const response = await api.get("trips");
      setTrips(response.data);
      console.log(response.data);
    }
    LoadTripsApi();
  }, []);

  function handleAddReserve(id) {
    dispatch(addReserveRequest(id));
    navigate("/reservas");
  }

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span> Status :{trip.status ? "Disponivel" : "Indisponivel"}</span>
            <button type="button" onClick={() => handleAddReserve(trip.id)}>
              <div>
                <MdFlightTakeoff size={16} color="#fff" />
              </div>
              <span>Solicitar Reserva</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
