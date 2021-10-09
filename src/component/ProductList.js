import { useContext, useState, useEffect } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { Modal, Button, Alert} from 'react-bootstrap';
import Pagination from './Pagination'
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

    
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(2)
    
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPagesNum = Math.ceil(product.length / productPerPage);

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

            <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentProducts ={currentProducts}
                product = {product} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
