import { useState } from "react";
export default function LikeButton() {
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
