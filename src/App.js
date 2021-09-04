import React , {Fragment } from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from  './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';
import './App.css';

const App = () => {
  //use state in functional component
  
  // async componentDidMount(){
  //   this.setState({loading : true});

  //   const res =await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({users : res.data , loading : false});   
  // }


  return (
  <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <Navbar title = 'github finder' />
          <div className="container">
            <Alert />

            <Switch>

              {/* <Route exact path = "/" render= {props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )} /> */}

              <Route exact path = "/" component={Home}/>

              <Route exact path = '/about' component={About} />

              <Route exact path = '/user/:login' component={User} />

              <Route component = {NotFound} />

              {/* render = {props => (
                <User {...props}  />
              )} */}

            </Switch>

          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
  );
}

export default App;