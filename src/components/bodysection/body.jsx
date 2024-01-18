import React from "react";
import "./body.css"
const Body=(props)=>{
  console.log(props.data)
  return (
    <>
    <div>
      {props.data.map((image) => {
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        );
      })}
    </div>
    </>
  );
  }


   
  
  export default Body;