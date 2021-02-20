import { Col, Row } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";



const Goods = ({items}) => {
    return (
        <Col md={10}>
            <Row>
            {items?items.map(item => {
                return(
                    <CardItem key={item.id} {...item} />
                )
            }):false}
            </Row>
        </Col>
    )
}

export default Goods;