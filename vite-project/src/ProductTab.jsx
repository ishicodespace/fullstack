import Product from './Product.jsx'
function ProductTab() {
    return (
       <>
            <Product title="Phone" price={699} />
           <Product title="Laptop" price={999} />
           <Product title="Tablet" price={499} />
       </>
    )
}
export default ProductTab;