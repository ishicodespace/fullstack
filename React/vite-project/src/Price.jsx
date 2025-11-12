function Price({ OldPrices, NewPrices }) {
    let Oldstyles = {
    
      textDecoration: "line-through",
      color: "red",
    };
    let Newstyles = {
      fontWeight: "bold",
    };
    let styles = {
      paddingTop: "15px",
      backgroundColor: "goldenrod",
      height: "25px",
      width: "200px",
      borderBottomLeftRadius: "14px",
      borderBottomRightRadius: "14px",
    };
  return (
    <div style={styles}>
          <span style={Oldstyles}>{OldPrices}</span>
          &nbsp; &nbsp; 
          <span style={Newstyles}>{NewPrices}</span>
    </div>
  );
}
export default Price;
