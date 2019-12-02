import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/NavComponent/Nav';
import PostHolder from './Components/PostHolderComponent/PostHolder';
import PostModal from './Components/CreatePostComponent/PostModal';
import Login from './Components/LoginComponent/Login';
import Register from './Components/RegisterComponent/Register';
import Profile from './Components/ProfileComponent/Profile';
import Post from './Components/PostComponent/Post';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/" component={ PostHolder }/>
            <Route exact path="/new_blog" component={ PostModal }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/register" component={ Register }/>
            <Route exact path="/my_profile" component={ Profile }/>
            <Route exact path="/post/:postid" component={props =>  <Post {...props}/> }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;