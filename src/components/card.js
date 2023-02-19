import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <img onClick={props.clickFunc} height="200px"  src={props.source}/>
    </div>
  );
}

export default Card;