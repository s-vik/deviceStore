import { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";



const Goods = (props) => {
    const [goods, setGoods] = useState(null)
    useEffect(() => {
        axios.get('/products.json').then((response=>setGoods(response.data.products))).catch(err => console.log(err))
    }, [])
    console.log(goods)
    return (
        <Row>
      
            {goods?goods.map(item => {
                return(
                    <CardItem key={item.id} {...item} />
                )
            }):false}
        
        </Row>
    )
}

export default Goods;