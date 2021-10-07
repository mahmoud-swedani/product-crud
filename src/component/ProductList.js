import { useState } from "react"
import Product from "./Products"

const ProductList = () => {
    // const [product, setproduct] = useState([
    const [product] = useState([
        {id:1, product:"pin", desc: 'color red', amount: 10, price: 20, taxes: 5, sub: 200, tootal:50},
        {id:2, product:"car", desc: 'BMW', amount: 1, price: 300, taxes: 5, sub: 300, tootal:50},
        {id:3, product:"table", desc: 'Wood', amount: 2, price: 30, taxes: 5, sub: 60, tootal:50},
        {id:4, product:"readio", desc: 'smoole machane', amount: 2, price: 50, taxes: 5, sub: 100, tootal:50},
    ])
    
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
