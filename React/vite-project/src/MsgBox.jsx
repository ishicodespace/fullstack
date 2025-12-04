function msgBox({ userName, textColor }) {
  let style = { color: textColor };
  return <h1 style={style}>Hello! {userName}</h1>;
}
export default msgBox;
