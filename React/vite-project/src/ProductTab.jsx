import Product from './Product.jsx'
function ProductTab() {
    let feature = ["high-tech", "advanced"];
    return (
      <>
        <Product title="Phone" price={699} feature={feature} />
        <Product title="Laptop" price={999} feature={feature} />
        <Product title="Tablet" price={499} feature={feature} />
      </>
    );
}
export default ProductTab;