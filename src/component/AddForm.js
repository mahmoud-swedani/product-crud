import { Form, Button } from "react-bootstrap"


const AddForm = () =>{

     return (

        <Form >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="product *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="desc *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="amount *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="price *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="taxes *"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="tootal *"
                    required
                    
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Product
            </Button>
        </Form>

     )
}

export default AddForm;