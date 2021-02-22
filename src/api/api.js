import * as axios from "axios"


export const goodsAPI = {
    async getGoods() {
       return await axios.get('/products.json')
    },
}