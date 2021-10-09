import { useContext, useState, useEffect } from "react"
import { ProductContext } from "../contexts/ProductContext"
import EditForm from "./EditForm"
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap"

const Product = (props) => {
    const {product} = props

    const {deleteProduct} = useContext(ProductContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [product])
    return(
        <>
            <td>{ product.productName }</td>
            <td>{ product.desc }</td>
            <td>{ product.price } <span className="SYP">SYP</span></td>
            <td>
            <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteProduct(product.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theProduct={product} />
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

export default Product