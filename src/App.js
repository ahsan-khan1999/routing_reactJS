import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import { BrowserRouter as Router, Link, Switch, Route,withRouter } from 'react-router-dom'
import Header from './Components/Header';
function App() {
  return (

    <div className="App">

      {/* <Router> */}
        
        <Header />
        {/* <Switch>
        <Route exact path="/"  component={Home} />
          
        

        <Route exact path="/about"  component={About} />
          
        
        <Route path="/service" exact component={Service} />
           */}
        

{/* </Switch> */}
      

    </div>
  );
}

export default App;
