import React from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Container from './Components/Container/Container';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Kanji from './Components/Kanji/Kanji';
import PostList from './Json/PostList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Container>
          <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Kanji" component={Kanji}/>
            <Route path="/PostList" component={PostList}/>
            <Redirect to="/Home"/>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
