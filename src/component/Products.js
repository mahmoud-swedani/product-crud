
const Product = (props) => {
    const {product} = props
    
    return(
        <>
            <td>{ product.productName }</td>
            <td>{ product.desc }</td>
            <td>{ product.price } <span className="SYP">SYP</span></td>
            <td>

                <button  className="btn text-warning btn-act" data-toggle="modal">
                    <i className="material-icons">&#xE254;</i>
                </button>

                <button className="btn text-danger btn-act" data-toggle="modal">
                    <i className="material-icons">&#xE872;</i>
                </button>
            </td>
        </>

    )
}

export default Product