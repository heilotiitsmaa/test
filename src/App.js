import React from 'react';
import Meals from './components/Meals';
import Header from './components/Header';

const App = () => {
 return (
    <>
     <h1>Food Order App</h1>
     <Header />
     
     <Meals />
    </>
  );
}

export default App;
