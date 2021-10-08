import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

const Product = (props) => {
    const {product} = props

    const {deleteProduct} = useContext(ProductContext)

    return(
        <>
            <td>{ product.productName }</td>
            <td>{ product.desc }</td>
            <td>{ product.price } <span className="SYP">SYP</span></td>
            <td>

                <button  className="btn text-warning btn-act" data-toggle="modal">
                    <i className="material-icons">&#xE254;</i>
                </button>

                <button onClick={() => deleteProduct(product.id)}  className="btn text-danger btn-act" data-toggle="modal">
                    <i className="material-icons">&#xE872;</i>
                </button>
            </td>
        </>

    )
}

export default Product