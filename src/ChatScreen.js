import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://www.pinclipart.com/picdir/middle/84-841840_svg-royalty-free-library-icon-svg-profile-profile.png',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://www.pinclipart.com/picdir/middle/84-841840_svg-royalty-free-library-icon-svg-profile-profile.png',
            message: 'Gimana kabar?'
        },
        {
            message: 'Baik nih len..'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH DOI ON 28/08/2020</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            )} 
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen__inputField"
                        placeholder="Type a message..."
                        type="text"
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    );
    
}

export default ChatScreen;