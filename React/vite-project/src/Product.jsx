import "./Product.css";
// function Product({ title, price, feature }) {
//     let styles = {backgroundColor:price>300?"green":"pink"};
//     const list = feature.map((features) => <li>{features}</li>);
//     let isDiscount= price>30000?"5% Discount":"No Discount Available";
//   return (
//     <div className="product">
//           <h3>{title}</h3>
//           <h3>{price}</h3>
//       <p>{isDiscount}</p>
//     </div>
//   );
// }
function Product({ title, description, features, price }) {
  // console.log(features);
  // console.log({ title, description, features });
  let styles = { backgroundColor: price > 30000 ? "green" : "yellow"};
  let discount = price > 30000 ? <p>5% Discount</p> : "No Discount";
  return (
    <div style={styles}>
      <h1>{title}</h1>
      <p>{description}</p>
      {discount}
    </div>
  );
}
export default Product;
