import { Avatar } from '@material-ui/core';
import { AccessTimeOutlined, AccessTimeRounded, HelpOutlineOutlined, SearchOutlined, SingleBedOutlined } from '@material-ui/icons';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../Firebase';
function Header() {
    const [user]=useAuthState(auth);

    
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                onClick={ ()=>auth.signOut()}
                src={user?.photoURL}
                alt={user?.displayName}
                />
                <AccessTimeRounded />
            </HeaderLeft>
            <HeaderSearch>
                <SearchOutlined />
                <input type="text" placeholder="search"></input>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineOutlined />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
padding: 10px 0;
color: white;
background-color: var(--slack-color);
justify-content: space-between;
`
const HeaderLeft = styled.div`
display: flex;
flex:0.3;
align-items: center;
margin-left: 20px;
>.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`
const HeaderSearch = styled.div`
flex:0.4;
opacity: 1;
border-radius: 4px;
background-color: #421f44;
text-align: center;
padding: 0 50px;
color: gray;
border: 1px gray solid;
>input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline:0;
    color:white;
}
`
const HeaderRight = styled.div`
flex:0.3;
display: flex;
justify-content: flex-end;
>.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`
const HeaderAvatar=styled(Avatar)`
cursor:pointer;
:hover{
    opacity: 0.8;
}
`