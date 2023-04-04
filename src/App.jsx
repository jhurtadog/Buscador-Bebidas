import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
        <ListadoBebidas />
        <ModalBebida />
      </Container>
    </Provider>
  );
}

export default App;
