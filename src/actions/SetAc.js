import {
  SET_CPU,
  SET_GPU,
  SET_HDD,
  SET_RAM,
  SET_SSD,
} from "../action-types/index";

const initialState = {
  User: "Carlos",
  CPu: [],
  GPu: [],
  RAm: [],
  SSd: [],
  HDd: [],
  SAved: [],
};
function SET(state = initialState, action) {
  switch (action.type) {
    case SET_CPU:
      const CpuArray = state.CPu;
      return { ...state, CPu: [...CpuArray, action?.payload] };
    case SET_GPU:
      const GpuArray = state.GPu;
      return { ...state, GPu: [...GpuArray, action?.payload] };
    case SET_RAM:
      const RamArray = state.RAm;
      return { ...state, RAm: [...RamArray, action?.payload] };
    case SET_SSD:
      const SSdArray = state.SSd;
      return { ...state, SSd: [...SSdArray, action?.payload] };
    case SET_HDD:
      const HddArray = state.HDd;
      return { ...state, HDd: [...HddArray, action?.payload] };
    default:
      return state;
  }
}
export default SET;
