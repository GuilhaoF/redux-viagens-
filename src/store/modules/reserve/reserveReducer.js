import produce from "immer";

export default function Reserve(state = [], action) {
  //draft -> copia do conteudo original
  switch (action.type) {
    case "ADD_RESERVE_SUCCESS":
      return produce(state, (draft) => {
        //verifica se ja existe (reserva com aquele id)
        draft.push(action.trip)

      });
    case "REMOVE_RESERVE":
      return produce(state, (draft) => {
        const tripIndex = draft.findIndex((trip) => trip.id === action.id);

        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1);
        }
      });
    case "UPDATE_RESERVE_SUCCESS": {
      return produce(state, (draft) => {
        const tripIndex = draft.findIndex((trip) => trip.id === action.id);

        if (tripIndex >= 0) {
          draft[tripIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
