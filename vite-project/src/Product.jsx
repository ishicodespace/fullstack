import "./Product.css";
function Product({ title, price, feature }) {
    let styles = {backgroundColor:price>300?"green":"pink"};
    const list = feature.map((features) => <li>{features}</li>);
    let isDiscount= price>30000?"5% Discount":"No Discount Available";
  return (
    <div className="product">
          <h3>{title}</h3>
          <h3>{price}</h3>
      <p>{isDiscount}</p>
    </div>
  );
}
export default Product;
