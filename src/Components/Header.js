import React from 'react'
import { BrowserRouter as Router, Link, withRouter ,Switch,Route} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Service from './Service'
// import {Router,Route} from 'react-router';

function Header() {
    return (
        <div>

            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                </ul>




                <Switch>
                    <Route exact path="/" component={Home} />



                    <Route exact path="/about" component={About} />


                    <Route path="/service" exact component={Service} />
                    </Switch>
          
                </Router>
            
        </div>
            )
}
            export default Header;
