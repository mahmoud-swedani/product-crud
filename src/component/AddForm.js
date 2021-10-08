import { Form, Button } from "react-bootstrap"
import { ProductContext } from "../contexts/ProductContext";
import {useContext, useState} from 'react';


const AddForm = () =>{


    const {addProduct} = useContext(ProductContext);

    const [newProduct, setNewProduct] = useState({
        productName:"", desc:"", price:""
    });
    const onInputChange = (e) => {
        setNewProduct({ ...newProduct , [e.target.name]:e.target.value })
    }

    const {productName, desc, price} = newProduct;

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(productName, desc, price);
    }

     return (

        <Form onSubmit={handleSubmit} >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="product *"
                    value={productName}
                    name="productName"
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="desc *"
                    name="desc"
                    value={desc}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="price *"
                    name="price"
                    value={price}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>


            <Button variant="success" type="submit" block >
                Add New Product
            </Button>
        </Form>

     )
}

export default AddForm;