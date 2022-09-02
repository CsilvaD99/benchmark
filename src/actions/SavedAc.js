import { SAVED_ADD, DELETE } from "../action-types/index";

const initialState = {
  SAved: [],
};
function SVD(state = initialState, action) {
  switch (action.type) {
    case SAVED_ADD:
      const SArray = state.SAved;
      return { ...state, SAved: [...SArray, action?.payload] };
    case DELETE:
      const DArray = state.SAved;
      return {
        ...state,
        SAved: [...DArray].filter((item) => item !== action?.payload),
      };

    default:
      return state;
  }
}
export default SVD;
