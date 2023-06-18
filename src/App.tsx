import React from 'react';
import Login from './components/Login/Login';
import { AppContext } from './context/global/global';
import Home from './components/Home/Home';



function App() {
  return (
    <>
      <AppContext.Provider value={{}}>
        <Login />
        {/* <Home /> */}
      </AppContext.Provider>
    </>
  );
}

export default App;
