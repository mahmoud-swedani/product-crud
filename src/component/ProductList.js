import { useContext, useState, useEffect } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { Modal, Button, Alert} from 'react-bootstrap';

import Product from "./Products"
import AddForm from "./AddForm"

const ProductList = () => {

    const {product} = useContext(ProductContext)

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose()
        return () => {
            handleShowAlert();
        }
    }, [product])
    return(
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Product</b></h2>
                    </div>
                    
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">
                           <i className="material-icons">&#xE147;</i> <span>Add New Product</span>
                        </Button>									
                    </div>
                </div>
            </div>
            <Alert show={showAlert} variant="success">
                product List Updated Succefully!
            </Alert>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>productName</th>
                        <th>desc</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    product.map(product => (
                        <tr key={product.id}>
                            <Product product={product} />
                        </tr>
                    ))  
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close Button
                        </Button>
                </Modal.Footer>
            </Modal>            
        </>

    )
}

export default ProductList
