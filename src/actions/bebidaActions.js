import {
  COMENZAR_DESCARGA_BEBIDAS,
  DESCARGA_BEBIDAS_EXITO,
  DESCARGA_BEBIDAS_ERROR,
  MOSTRAR_MODAL,
  CERRAR_MODAL,
  RECETA_EXITO,
  RECETA_ERROR,
} from "../types";

import clientAxios from "../config/axios";

export function obtenerBebidasAction(busqueda) {
  const { nombre, categoria } = busqueda;
  return async (dispatch) => {
    dispatch(descargarBebidas());
    try {
      const { data } = await clientAxios.get(`filter.php?i=${nombre}&c=${categoria}`);
      dispatch(descargaBebidasExitosa(data.drinks));
    } catch (error) {
      dispatch(descargaBebidasError(true));
    }
  };
}

const descargarBebidas = () => ({
  type: COMENZAR_DESCARGA_BEBIDAS,
  payload: true,
});

const descargaBebidasExitosa = (bebida) => ({
  type: DESCARGA_BEBIDAS_EXITO,
  payload: bebida,
});

const descargaBebidasError = () => ({
  type: DESCARGA_BEBIDAS_ERROR,
  payload: true,
});

export function mostrarModalAction(bebidaId) {
  return async (dispatch) => {
    dispatch(mostrarModal(bebidaId));
    try {
      const { data } = await clientAxios.get(`lookup.php?i=${bebidaId}`);
      dispatch(descargaRecetaExitosa(data.drinks[0]));
    } catch (error) {
      dispatch(descargaRecetaError(true));
    }
  };
}

const mostrarModal = (bebidaId) => ({
  type: MOSTRAR_MODAL,
  payload: bebidaId,
});

const descargaRecetaExitosa = (receta) => ({
  type: RECETA_EXITO,
  payload: receta,
});

const descargaRecetaError = () => ({
  type: RECETA_ERROR,
  payload: true,
});

export function cerrarModalAction() {
  return async (dispatch) => {
    dispatch(cerrarModal());
  };
}

const cerrarModal = () => ({
  type: CERRAR_MODAL,
  payload: false,
});
