import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// Theme
import themeObject from './util/bodytheme'
// Components
import HomeNav from './components/layout/HomeNav'
// Pages
import welcome from './pages/welcome'; 
import about from './pages/about';
import newsroom from './pages/newsroom';
import DashBoard from './pages/DashBoard';


const theme = createMuiTheme(themeObject);


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="APP">
        <Router>
        <div className="body-container">
          <HomeNav/>
          <Switch>
            <Route exact path="/" component={welcome}/>
            <Route exact path="/about" component={about}/>
            <Route exact path="/newsroom" component={newsroom}/>
            <Route exact path="/DashBoard" component={DashBoard}/>
          </Switch>
          </div>
        </Router> 
      </div>
      </MuiThemeProvider>
    );
  }
}
 
export default App
