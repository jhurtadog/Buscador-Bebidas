import { useSelector, useDispatch } from "react-redux";
import { Modal, Image } from "react-bootstrap";
import { cerrarModalAction } from '../actions/bebidaActions';

const ModalBebida = () => {
  const dispatch = useDispatch();
  const handleModalClick = () => dispatch(cerrarModalAction());
  const loading =  useSelector(state => state.bebidas.loading);
  const modal =  useSelector(state => state.bebidas.modal);
  const receta =  useSelector(state => state.bebidas.receta);

  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let index = 1; index < 16; index++) {
      if (receta[`strIngredient${index}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${index}`]} {receta[`strMeasure${index}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    !loading && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={receta.strDrinkThumb} alt={`Imge ${receta.strDrink}`} />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {receta.strInstructions}
            <h2>Ingredientes y Cantidades</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalBebida;
