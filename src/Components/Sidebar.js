import CreateIcon from '@material-ui/icons/Create'; import { AppsOutlined, BookmarkBorderOutlined, DraftsOutlined, ExpandLessOutlined, ExpandMoreOutlined, FiberManualRecordRounded, FileCopyOutlined, InboxOutlined, InsertCommentOutlined, PeopleAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import SidebarOptions from './SidebarOptions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../Reducer/appSlice';

function Sidebar() {
    const roomId = useSelector(selectRoomId);
    const [channels, loading, error] = useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth);
    const [showmore, setShowMore] = useState(false);
    let doc = roomId ? channels.docs.find(obj => obj.id == roomId) : channels?.docs[0];

    console.log(doc)
    return (

        <SidebarContainer>
            <Scrollbars>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>
                            Mango Story
                         </h2>
                        <h3>
                            <FiberManualRecordRounded />
                            {user?.displayName}
                        </h3>
                    </SidebarInfo>
                    <CreateIcon />

                </SidebarHeader>
                <SidebarOptions Icon={InsertCommentOutlined} Title={"Threads"} />
                <SidebarOptions Icon={InboxOutlined} Title={"Mentions & reactions"} />
                <SidebarOptions Icon={DraftsOutlined} Title={"Saved Items"} />
                <SidebarOptions Icon={BookmarkBorderOutlined} Title={"Channel browser"} />
                <SidebarOptions Icon={PeopleAltOutlined} Title={"People & user groups"} />
                <SidebarOptions Icon={AppsOutlined} Title={"Apps"} />
                <SidebarOptions Icon={FileCopyOutlined} Title={"file browser"} />
                <SidebarOptions Icon={ExpandLessOutlined} Title={"Show less"} />
                <hr />
                <SidebarOptions Icon={showmore ? ExpandMoreOutlined : ExpandLessOutlined} Title={"Channels"} clickActivity={(e) => { setShowMore(!showmore) }} />
                <hr />
                <SidebarOptions  Icon={AddIcon} addChanneloption Title={"Add Channel"} />
                {!showmore && doc &&
                    <SidebarOptions
                        Key={"gokul"}
                        Id={doc.id}
                        Title={doc.data().name}
                        selectChannel
                    />

                }

                {showmore && channels?.docs.map((doc) => (
                    <SidebarOptions
                        Key={doc.id}
                        Id={doc.id}
                        Title={doc.data().name}
                        selectChannel
                    />
                )
                )}

            </Scrollbars>


        </SidebarContainer >


    )
}

export default Sidebar
const SidebarContainer = styled.div`
flex:0.3;
background-color: var(--slack-color);
color: white;
border-top: 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
> hr {
    margin-bottom: 10px;
    margin-top:10px;
    border:1px solid #49274b;
}
`
const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding:13px;

>.MuiSvgIcon-root {
border-radius: 999px;
background-color: white;
padding:18px;
font-size:10px;
color:#49274b;
}

`
const SidebarInfo = styled.div`
flex:1;
>h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;

}
>h3 {
    font-size:13px;
    font-weight: 400;
    text-align: left;
    display: flex;
    align-items: center;
    >.MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color:Green
    }
}
`

