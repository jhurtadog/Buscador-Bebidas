import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState(null);
  const [receta, setReceta] = useState({})
  const [cargando, setCargando] = useState(false)

  const consultarBebidas = async (datos) => {
    try {
      const url = `filter.php?i=${datos.nombre}&c=${datos.categoria}`;
      const { data } = await clientAxios.get(url);
      setBebidas(data.drinks);
    } catch (error) {}
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaIdClick = (id) => {
    setBebidaId(id);
  };

  useEffect(() => {
    setCargando(true);
    const obtenerReceta = async () => {
      if (!bebidaId) return;
      try {
        const url = `lookup.php?i=${bebidaId}`;
        const { data } = await clientAxios.get(url);
        setReceta(data.drinks[0]);
      } catch (error) {} finally {
        setCargando(false)
      }
    };
    obtenerReceta();
  }, [bebidaId]);

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        consultarBebidas,
        modal,
        setModal,
        handleModalClick,
        handleBebidaIdClick,
        receta,
        cargando
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
