import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBebidas();

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
    !cargando && (
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
