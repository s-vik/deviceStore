import { Container, Row } from "react-bootstrap";

import "./App.css";
import GoodsContainer from './components/Goods/GoodsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = () => {
  return (
    <Container>
      <Row>
        <SidebarContainer />
        <GoodsContainer />
      </Row>
    </Container>
  );
};

export default App;
