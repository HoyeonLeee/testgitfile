import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
function App() {

  const sayHello = () => {
    alert("Hello!");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            {routes.map(route => {
              return (
                <Route 
                  key={route.path} 
                  path={route.path} 
                  exact
                >
                  <route.component />
                </Route>
              )
            })}
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
