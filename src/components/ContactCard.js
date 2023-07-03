import React from "react";
import { FaTrashAlt } from 'react-icons/fa';
import user from '../images/user.png'


const ContactCard=(props)=>{
    const {id,name,email}=props.contact;
    return(
        <div className="item">
            <img src={user} alt="user" className="ui avatar image"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <FaTrashAlt style={{ color: "red", marginTop:"5px"}} onClick={()=>props.clickHandler(id)} />
        </div>
    );
}
export default ContactCard;