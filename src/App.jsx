import './App.css'
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

function App() {

  return (
    <>
    <Container>
    <h1 className="text-center title">Formulario React</h1>
    <hr />
      <Formulario/>
    <hr />
    </Container>
    </>
  )
}

export default App
