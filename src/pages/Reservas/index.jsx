import { useSelector, useDispatch } from "react-redux";
import { MdAddCircle, MdDelete, MdRemoveCircle } from "react-icons/md";
import "./styles.css";
import {
  removerReserve,
  updateAmountReserveRequest,
} from "../../store/modules/reserve/actions";
export default function Reservas() {
  const reserves = useSelector((state) => state.Reserve);
  const dispatch = useDispatch();

  function handleRemoveReserve(id) {
    dispatch(removerReserve(id));
  }
  function handleDecrementAmount(trip) {
    dispatch(updateAmountReserveRequest(trip.id, trip.amount - 1));
  }
  function handleIncrementAmount(trip) {
    dispatch(updateAmountReserveRequest(trip.id, trip.amount + 1));
  }

  return (
    <div>
      <div className="header-reservas">
        <h1>Lista de Reservas</h1>
        <h1 className="title">({reserves.length}) Reservas</h1>
      </div>
      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button onClick={() => handleDecrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <span>{reserve.amount}</span>
            <button onClick={() => handleIncrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>

          <button type="button" onClick={() => handleRemoveReserve(reserve.id)}>
            <MdDelete size={20} color="#000" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
