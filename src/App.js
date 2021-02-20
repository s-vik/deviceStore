import { Container, Row } from "react-bootstrap";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GoodsContainer from './components/Goods/GoodsContainer';

const App = () => {
  return (
    <Container>
      <Row>
        <Sidebar />
        <GoodsContainer />
      </Row>
    </Container>
  );
};

export default App;
