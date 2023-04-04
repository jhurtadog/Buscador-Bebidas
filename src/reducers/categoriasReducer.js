import {
  COMENZAR_DESCARGA_CATEGORIAS,
  DESCARGA_CATEGORIAS_EXITO,
  DESCARGA_CATEGORIAS_ERROR,
} from "../types";

const initialState = {
  categorias: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_CATEGORIAS:
      return {
        ...state,
        loading: action.payload,
      };
    case DESCARGA_CATEGORIAS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        categorias: action.payload,
      };
    case DESCARGA_CATEGORIAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
