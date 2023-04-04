import {
  COMENZAR_DESCARGA_CATEGORIAS,
  DESCARGA_CATEGORIAS_EXITO,
  DESCARGA_CATEGORIAS_ERROR,
} from "../types";
import clientAxios from "../config/axios";

export function obtenerCategoriasAction() {
  return async (dispatch) => {
    dispatch(descargarCategorias());
    try {
      const { data } = await clientAxios.get(`list.php?c=list`);
      dispatch(descargaCategoriasExitosa(data.drinks));
    } catch (error) {
      dispatch(descargaCategoriasError(true));
    }
  };
}

const descargarCategorias = () => ({
  type: COMENZAR_DESCARGA_CATEGORIAS,
  payload: true,
});

const descargaCategoriasExitosa = (categorias) => ({
  type: DESCARGA_CATEGORIAS_EXITO,
  payload: categorias,
});

const descargaCategoriasError = () => ({
  type: DESCARGA_CATEGORIAS_ERROR,
  payload: true,
});
