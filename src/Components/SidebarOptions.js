import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { db } from '../Firebase';
import { enterRoom } from '../Reducer/appSlice';
function SidebarOptions({ Icon, Title, addChanneloption, Id, Key, clickActivity }) {
    console.log(Key,Title)
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }
    const selectChannel = () => {
        dispatch(enterRoom({
            roomId: Id
        }))


    }

    return (
        <SidebarOptions_container key={Key} id={Key} onClick={addChanneloption ? addChannel : Id ? selectChannel : clickActivity}>
            { Icon && <Icon  key={Key} fontSize="small" style={{ padding: "10px" }} />}
            {Icon ? <h3>{Title}</h3> : (
                <SidebarOptionsChannel key={Key}>
                    <span>#</span>
                    {Title}
                </SidebarOptionsChannel>
            )
            }


        </SidebarOptions_container>
    )
}

export default SidebarOptions
const SidebarOptions_container = styled.div`
display: flex;
align-items: center;
padding-left:2px;
font-size: 12px;
cursor:pointer;
:hover {
    opacity: 0.9;
    background-color:#340e36;
}
>h3{
    font-weight: 500;
}
> h3> span {
    padding:15px;

}
`
const SidebarOptionsChannel = styled.h3`
padding:10px 0;
font-weight: 300;
`
