import {StreamChat} from 'stream-chat';
import {ChannelList, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth} from './chatComponents';
import React from 'react';
import './chats.css';
const apiKey = 'rsftqa3supjz';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const Chats = () => {
    if(!authToken) {
        return <Auth />
    }
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    );
    
}

export default Chats;