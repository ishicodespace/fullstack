import AmazonProduct from './AmazonProduct.jsx';
export default function AmazonproductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  
    return (
      <div style={styles}>
      
        {/* using index to identify which index is of which product */}
        <AmazonProduct title="Logitech MX Master" idx={0} />
        <AmazonProduct title="Apple Pencil" idx={1} />
        <AmazonProduct title="Zebronics Zeb-Transformer" idx={2} />
        <AmazonProduct title="Petronics Toad 23" idx={3} />
      </div>
    );
}