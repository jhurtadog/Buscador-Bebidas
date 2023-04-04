import { useContext } from "react";
import BebidasContext from "../context/BebidasProvides";

const useBebidas = () => {
  return useContext(BebidasContext);
};

export default useBebidas;
