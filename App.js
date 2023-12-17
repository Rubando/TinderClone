import Header from './Header'
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BioCards from './BioCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats'
import ChatScreen from './ChatScreen'


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element = {[ <Header/>, <BioCards/>, <SwipeButtons/>]}/>
          <Route path="/chat" element={[<Header backButton="/"/> ,<Chats/>]} />
          <Route path="/chat/:person" element={[<Header backButton="/chat"/> , <ChatScreen/>]} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

        // {/*Picture Cards*/}
        // {/* Buttons bellow pictures*/}
        // {/* Chat screen*/ }
        // {/*Individual chat screen */}
        
