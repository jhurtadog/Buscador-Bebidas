import { useDispatch } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";
import { mostrarModalAction } from "../actions/bebidaActions";
import PropTypes from "prop-types";

const Bebida = ({ bebida }) => {
  const dispatch = useDispatch();
  const handleModalClick = (bebidaId) => dispatch(mostrarModalAction(bebidaId));

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Image de ${bebida.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleModalClick(bebida.idDrink);
            }}
            variant="warning"
            className="w-100 text-uppercase mt-2"
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Bebida.propTypes = {
  bebida: PropTypes.object,
};

export default Bebida;
