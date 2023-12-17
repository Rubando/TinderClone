import React from 'react';
import "./Header.css";
import Person2Icon from '@mui/icons-material/Person2';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import {Link, useNavigate} from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({backButton}){
    const navigate = useNavigate();
    return(
        <div className = "header">
            {backButton ?(
                <IconButton onClick={() => navigate(backButton, {replace:true})}>
                <ArrowBackIosIcon fontSize="large" className="header__icon"/>
                </IconButton>
            ) : (

                <IconButton>
                    <Person2Icon className="header__icon" fontSize="large"/>
                </IconButton>
            )}


            <Link to="/">
            <img 
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-emblem.jpg"
            alt="tinder logo"
            />
            </Link>
            
            <Link to ="/chat">
            <IconButton>
            <ChatBubbleIcon className="header__icon" fontSize = "large"/>
            </IconButton>
            </Link>

        </div>
    )
}

export default Header