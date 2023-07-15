import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import userEvent from '@testing-library/user-event';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Components/Login';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src="https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj"
            alt="" />

          <Spinner color="purple" name="ball-spin-fade-loader" fadeIn="none 
" />


        </AppLoadingContent>
      </AppLoading>

    )


  }

  return (
    <div className="App">
      <Router>
        {!user ? <Login /> : (
          <>
            <Header />
            <AppBody>

              <Sidebar />
              <Chat />
              <Switch>
                <Route path="/" exact>
                </Route>
              </Switch>
            </AppBody>

          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width:100%;

`
const AppLoadingContent = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

>img {
  height:100px;
  padding: 20px;
  margin-bottom: 40px;
}
`


const AppBody = styled.div`
display: flex;
height:100vh;
`