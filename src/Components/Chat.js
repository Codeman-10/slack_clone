import { InfoOutlined } from '@material-ui/icons';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { db } from '../Firebase';
import { selectRoomId } from '../Reducer/appSlice';
import ChatInput from './ChatInput';
import { useCollection,useDocument } from 'react-firebase-hooks/firestore';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null);
    const roomId=useSelector(selectRoomId);
    const [roomDetails]=useDocument(roomId&&db.collection("rooms").doc(roomId))
    const [roomMessages,loading]=useCollection(roomId&& db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","asc"))
    useEffect(() => {
     chatRef?.current?.scrollIntoView({
         behavior:"smooth"
     });
    }, [roomId,loading])
   

    return (
        <ChatContainer>
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>{roomDetails?.data().name}</strong>
                    </h4>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined />Details
                </p>

                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map(doc=>{
                    const {message,timestamp,user,userImage}=doc.data();
                    return (
                    <Message
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    ></Message>)

                })}
                <ChatBottom  ref={chatRef}/>
            </ChatMessages>

            { <ChatInput
            channelId={roomId}
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            /> }
            </>
        </ChatContainer>
    )
}

export default Chat
const ChatContainer = styled.div`
flex:0.7;
overflow-y: scroll;
margin-top: 60px;
flex-grow: 1;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding:10px;
border: 1px solid gray;
`
const HeaderLeft = styled.div`
display:flex;
align-items: center;
>h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
}
>h4> .MuiSvgIcon-root {
    margin-left:10px;
    font-size: 18px;
}
`

const HeaderRight = styled.div`
>p {
    display:flex;
align-items: center;
font-size: 14px;
}
>p .MuiSvgIcon-root {
margin-right: 5px !important;
font-size: 16px;
}
`
const ChatBottom = styled.div`
padding-bottom: 200px;
`

const ChatMessages = styled.div`
`
