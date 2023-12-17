import React from "react";
import './Chats.css'
import Chat from './Chat'

function Chats(){
    return(
        <div className = "chats">
            <Chat
                name = "Beter"
                message = "Hi"
                timestamp = "40 seconds ago"
                profilePic = "https://www.looper.com/img/gallery/the-real-life-inspiration-for-family-guys-peter-griffin/l-intro-1672162426.jpg"
            />
            <Chat
                name = "Beter"
                message = "Hi"
                timestamp = "40 seconds ago"
                profilePic = "https://www.looper.com/img/gallery/the-real-life-inspiration-for-family-guys-peter-griffin/l-intro-1672162426.jpg"
            />
            <Chat
                name = "Beter"
                message = "Hi"
                timestamp = "40 seconds ago"
                profilePic = "https://www.looper.com/img/gallery/the-real-life-inspiration-for-family-guys-peter-griffin/l-intro-1672162426.jpg"
            />
            <Chat
                name = "Beter"
                message = "Hi"
                timestamp = "40 seconds ago"
                profilePic = "https://www.looper.com/img/gallery/the-real-life-inspiration-for-family-guys-peter-griffin/l-intro-1672162426.jpg"
            />


        </div>
    )
}

export default Chats;