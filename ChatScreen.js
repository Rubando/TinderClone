import React from "react"
import {useState} from "react"
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar';

function ChatScreen(){

    const [messages, setMessages] = useState([

        {
            name: 'Beter',
            image: "https://www.looper.com/img/gallery/the-real-life-inspiration-for-family-guys-peter-griffin/l-intro-1672162426.jpg",
            message: 'Whats up'

        },
        {
            name: 'Beter',
            image: "https://www.looper.com/img/gallery/the-real-life-inspiration-for-family-guys-peter-griffin/l-intro-1672162426.jpg",
            message: 'IM Beter'
            
        },
        {
            message: "Hi beter"
        }


    ])
    return (

        <div className = "chatScreen">

            <p className="chatScreen__timestamp"> YOU MATCHED WITH BETER ON 10/10/10</p>
            {messages.map(message =>
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )}

            
                <form className="chatScreen__input">
                    <input className="chatScreen__inputField" placeholder= "Type a message..." type="text"/>
                    <button className="chatScreen__inputButton">SEND</button>
                </form>
            
        </div>




    );
}

export default ChatScreen