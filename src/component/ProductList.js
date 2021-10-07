import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import Product from "./Products"

const ProductList = () => {
const {product} = useContext(ProductContext)
    
    return(
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Product</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-success" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i>
                             <span>Add New Product</span>
                        </button>					
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>product</th>
                        <th>desc</th>
                        <th>amount</th>
                        <th>price</th>
                        <th>taxes</th>
                        <th>sub</th>
                        <th>tootal</th>
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
        </>

    )
}

export default ProductList
