import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../Firebase';

function Login() {
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>{
            console.log(error);
        })
    }
    return (
 <LoginContainer>
     <InnerLoginContainer>
        <img src="https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj"/>
     
        <h1>Sign in to the gokul Slack APP</h1>
        <p>gokul.stack.com</p>
        <Button
        onClick={signIn}
        >
Sign In With Google
        </Button>
     </InnerLoginContainer>
 </LoginContainer>    
    )
}

export default Login
const LoginContainer=styled.div`
display:grid;
place-items: center;
background-color: #f8f8f8;
height:100vh;
`;
const InnerLoginContainer=styled.div`
padding:100px;
text-align: center;
background-color: white;
border-radius:10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);

>img{
    object-fit: contain;
    height:100px;
    margin-bottom: 40px;
}
>Button {
margin-top:50px;
color: white;
background-color:#0a8d4d;
text-transform: inherit !important;
}

`;