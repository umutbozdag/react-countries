import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Nav from './components/Nav/Nav';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log("toggled dark mode");
    setDarkMode(!isDarkMode);
    const app = document.querySelector('.App');
    app.style.transition = "all 0.2s linear";

    localStorage.setItem('isDarkMode', isDarkMode);
  }

  return (
    <div className={`App ${localStorage.getItem('isDarkMode') === 'true' ? 'dark-mode' : 'light-mode'}`}>
      {console.log(localStorage.getItem('isDarkMode'))}
      <Router>
        <Nav toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/countries/:countryId"
            render={(props) => (
              <CountryDetail
                {...props}
                key={props.match.params.countryId} />
            )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
