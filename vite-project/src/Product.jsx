import './Product.css'
function Product({ title , price }) {
    return (
        <div className="product" >
            <h1>
                {title}</h1>
            <p>Description of {title}</p>
            <p>Price of {price}</p>
    </div >
    )
}
export default Product;
