import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import Bebida from "./Bebida";

const ListadoBebidas = () => {
  const bebidas = useSelector((state) => state.bebidas.bebidas);
  return (
    <Row className="mt-5">
      {bebidas.map((bebida) => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  );
};

export default ListadoBebidas;
