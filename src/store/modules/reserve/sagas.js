import api from "../../../services/api";
import { addReserveSuccess, updateAmountReserveSuccess } from "./actions";
import { select, call, put, all, takeLatest } from "redux-saga/effects";

function* addToReserve({ id }) {
  const tripExists = yield select((state) =>
    state.Reserve.find((trip) => trip.id === id)
  );
  //verificando o stock
  const myStock = yield call(api.get, `/stock/${id}`);
  //recebendo stock da api
  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert("quantidade maxima atingida");
    return;
  }

  if (tripExists) {
    yield put(updateAmountReserveSuccess(id, amount));
  } else {
    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addReserveSuccess(data));
  }
}
function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }
  const myStock = yield call(api.get, `/stock/${id}`);

  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert("quantidade maxima atingida");
    return;
  }
  yield put(updateAmountReserveSuccess(id, amount));
}
//takelatest -> ele pega a ultima chamada de requisicao
export default all([
  takeLatest("ADD_RESERVE_REQUEST", addToReserve),
  takeLatest("UPDATE_RESERVE_REQUEST", updateAmount),
]);
