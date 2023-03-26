import React from 'react';
import "./infoAvatar.scss"
import noImage from '../../img/no-image.png'

const InfoAvatar = ({ show, avatarItem, onClose }) => {
    
    return (
      <>
            {(show) ? (
                <div className="wrapper"> 
                <div className="container-info" >
                    <button className="close-modal" onClick={onClose}>Close</button>
                     <div className="info-cover">
                         <img className="img-cover" src={avatarItem.image || noImage} alt="img-book"/>
                     </div>
                     <div className="info-details">
                        <p className="info-title">Name</p>
                        <p className="info-description"> {avatarItem.name}</p>
                        <p className="info-title">Status</p>
                        <p className="info-description">   {avatarItem.status}</p>
                        <p className="info-title">Species</p>
                        <p className="info-description">{avatarItem.species}</p>
                     </div>
                     <div className="info-details">
                         <p className="info-title">Origin</p>
                         <p className="info-description"> {avatarItem.origin.name}</p>
                         <p className="info-title">Location</p>
                         <p className="info-description"> {avatarItem.location.name}</p>
                         <p className="info-title">Gender</p>
                         <p className="info-description"> {avatarItem.gender}</p>
                     </div>
                </div>
                </div>    
            ) : null
            }
        </>
    );
}

export default InfoAvatar;