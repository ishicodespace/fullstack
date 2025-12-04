import Product from './Product.jsx'
function ProductTab() {
  let features=["Feature 1","Feature 2","Feature 3"];
    return (
      <>
        <Product title="Phone" description="A smartphone with many features" features={features} price={35000} />
        <Product title="Laptop" description="A powerful laptop for work and play" price={45000} />
        <Product title="Tablet" description="A lightweight tablet for on-the-go use" price={25000} />
      </>
    );
}
export default ProductTab;