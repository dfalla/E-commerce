
import axios from 'axios';

const productService = {

    async getAllProducts(filter) {

        const baseApi = "https://www.thecocktaildb.com/api/json/v1/1/";

        const { data } = await axios.get(`${baseApi}search.php?s=${filter.productName}`)
        
        return data.drinks == null ? [] : data.drinks;
    }
}

export default productService;