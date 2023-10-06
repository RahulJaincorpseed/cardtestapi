import axios from "axios";
import React from "react";
import "./CardComponent.css";

const CardComponent = ({cardname, cardheight, cardindex, cardfilms, addCard, setAddCard}) => {
   
const removeCard = (id) =>{
  console.log(id);
  setAddCard((prev)=> (prev -1))
}

  return(
    <div className="single-card" index={cardindex}>
        <h1 className="card-heading">Card</h1>
        <p className="card-data">card Name: {cardname}</p>
        <p className="card-data">card Height: {cardheight}</p>
        <p className="card-data">Film List</p>
        
        {addCard > 3 ? <i onClick={(id)=> removeCard(cardindex)} class="fa-regular hide-card-data fa-circle-xmark"></i>: ""}
        <div className="film-list-box">
        {cardfilms.map((film, index)=>(
            <div index={index}>
                <p>{film}</p>
            </div>
        ))}
        </div>

    </div>
  )
};

export default CardComponent;
