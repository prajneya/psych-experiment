import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Consent from './components/Consent/Consent';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Video from './components/Video/Video';
import Input from './components/Input/Input';
import Final from './components/Final/Final';
import Thanks from './components/Thanks/Thanks';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} exact/>
          <Route path='/consent' element={<Consent />} exact/>
          <Route path='/home' element={<Home />} exact/>
          <Route path='/game/:id' element={<Game/>}  exact/>
          <Route path='/video/:id' element={<Video/>}  exact/>
          <Route path='/input/:id' element={<Input/>}  exact/>
          <Route path='/final/:id' element={<Final/>}  exact/>
          <Route path='/thanks' element={<Thanks/>}  exact/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
