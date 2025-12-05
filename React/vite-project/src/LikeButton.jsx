import { useState } from "react";
export default function LikeButton() {
  //initial value of liked is false
  let [liked, setliked] = useState(false); //initialization
  function toggle() {
    setliked(!liked);
    console.log(liked);
  }
  return (
    <>
      <p onClick={toggle}>
        {liked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart"></i>
        )}
      </p>
    </>
  );
}
