import {
  COMENZAR_DESCARGA_BEBIDAS,
  DESCARGA_BEBIDAS_EXITO,
  DESCARGA_BEBIDAS_ERROR,
  MOSTRAR_MODAL,
  CERRAR_MODAL,
  RECETA_EXITO,
  RECETA_ERROR,
} from "../types";

const initialState = {
  bebidas: [],
  error: null,
  loading: false,
  modal: false,
  bebidaId: null,
  receta: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_BEBIDAS:
      return {
        ...state,
        loading: action.payload,
      };
    case DESCARGA_BEBIDAS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        bebidas: action.payload,
      };
    case RECETA_ERROR:
    case DESCARGA_BEBIDAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MOSTRAR_MODAL:
      return {
        ...state,
        loading: false,
        bebidaId: action.payload,
        modal: true,
      };
    case CERRAR_MODAL:
      return {
        ...state,
        loading: false,
        bebidaId: null,
        modal: action.payload,
        receta: {},
      };
    case RECETA_EXITO:
      return {
        ...state,
        receta: action.payload,
      };
    default:
      return state;
  }
}
