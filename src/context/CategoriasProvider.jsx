import { createContext, useEffect, useState } from "react";
import clientAxios from "../config/axios";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    try {
      const url = `list.php?c=list`;
      const { data } = await clientAxios.get(url);
      setCategorias(data.drinks);
    } catch (error) {}
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
