import "./cardAvatar.scss";
import Img from "../../img/no-image.png"
import React from 'react';

const CardAvatar = (props) => {
  
  const onClickInfo = (card) => {
    props.clickInfo(card)
  }

  return (
      <>
      <div className="container-card"
        onClick={() => { onClickInfo(props.card) }
        }
      >
          <img className="img-avatar" 
                    src={props.card.image}
          alt={Img}
         
          />
            <p className="title-avatar">{props.card.name}</p>
      </div>
      
      </>
    );
  }
  
  export default CardAvatar;