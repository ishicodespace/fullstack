import Price from "./Price.jsx";
import "./AmazonProduct.css";
function AmazonProduct({ title, idx }) {
  //product is using price so product will pass the data (props) to price
  let OldPrices = ["$10", "$20", "$30", "$40"];
  let NewPrices = ["$8", "$15", "$25", "$35"];
  let Description = [
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intuitive Drawing", "Designed for IPad Pro"],
    ["Multi-Device", "Intuitive Drawing"],
    ["High Durability", "Multi-Device"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price OldPrices={OldPrices[idx]} NewPrices={NewPrices[idx]} />
    </div>
  );
}
export default AmazonProduct;
