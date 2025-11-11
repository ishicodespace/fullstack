import Price from "./Price.jsx";

function AmazonProduct({ title}) {
  return (
    <div className="Product">
      <p>{title}</p>
      <p>Description</p>
      <Price />
    </div>
  );
}
export default AmazonProduct;
