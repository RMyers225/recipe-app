import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = "26f471f3";
  const APP_KEY = "7a7c52aacdda1a0c76eed433c61a5cd8";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
