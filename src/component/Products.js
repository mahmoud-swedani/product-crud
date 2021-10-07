
const Product = (props) => {
    const {product} = props
    return(
        <>
            <td>{ product.product }</td>
            <td>{ product.desc }</td>
            <td>{ product.amount }</td>
            <td>{ product.price } <span className="SYP">SYP</span></td>
            <td>{ product.taxes } <span className="SYP">SYP</span></td>
            <td>{ product.sub } <span className="SYP">SYP</span></td>
            <td>{ product.tootal } <span className="SYP">SYP</span></td>
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