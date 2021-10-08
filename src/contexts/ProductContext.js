import {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext()

const ProductContextProvider  = (props) => {

    const [product] = useState([
        {id:uuidv4(), product:"pin", desc: 'color red', amount: 10, price: 20, taxes: 5, tootal:50},
        {id:uuidv4(), product:"car", desc: 'BMW', amount: 1, price: 300, taxes: 5, tootal:50},
        {id:uuidv4(), product:"table", desc: 'Wood', amount: 2, price: 30, taxes: 5, tootal:50},
        {id:uuidv4(), product:"readio", desc: 'smoole machane', amount: 2, price: 50, taxes: 5, tootal:50},
    ])


    return (
        <ProductContext.Provider value={{product}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;