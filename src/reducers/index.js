import { combineReducers } from "redux";
import bebidasReducer from "./bebidasReducer";
import categoriasReducer from "./categoriasReducer";

export default combineReducers({
  bebidas: bebidasReducer,
  categorias: categoriasReducer,
});
