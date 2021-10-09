import {  Form, Button } from "react-bootstrap"
import { ProductContext } from "../contexts/ProductContext";
import {useContext, useState} from 'react';

const EditForm = ({theProduct}) =>{

    const id = theProduct.id;

    
    
    const [productName, setName] = useState(theProduct.productName);
    const [desc, setDesc] = useState(theProduct.desc);
    const [price, setPrice] = useState(theProduct.price);


    const {updateProduct} = useContext(ProductContext);

    const updatep = {id, productName, desc, price}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, updatep)
    }

     return (


        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="product *"
                    name="productName"
                    onChange = { (e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="desc *"
                    name="desc"
                    onChange = { (e) => setDesc(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="price *"
                    name="price"
                    onChange = { (e) => setPrice(e.target.value)}
                    required
                />
            </Form.Group>


            <Button variant="success" type="submit" block >
                Update Product
            </Button>
        </Form>

     )
}

export default EditForm;