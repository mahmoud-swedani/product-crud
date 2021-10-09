import {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext()

const ProductContextProvider  = (props) => {

    const [product, setProduct] = useState([
        {id:uuidv4(), productName:"pin", desc: 'color red', price: 20},
        {id:uuidv4(), productName:"car", desc: 'BMW', price: 300},
        {id:uuidv4(), productName:"table", desc: 'Wood', price: 30},
        {id:uuidv4(), productName:"readio", desc: 'smoole machane',price: 30}
    ])
    useEffect(()=> {
        setProduct(JSON.parse(localStorage.getItem('product')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(product));
    })
    
    const addProduct = (productName, desc, price) => {
        setProduct([...product ,{id:uuidv4(), productName, desc, price}])
    }
    const deleteProduct = (id) => {
        setProduct(product.filter(product => product.id !== id))
    }
    const updateProduct = (id, updatedProduct) => {
        setProduct(product.map((prod) => prod.id === id ? updatedProduct : prod))
    }
    
    return (
        <ProductContext.Provider value={{product, addProduct, deleteProduct, updateProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;