import { useState } from 'react';
import * as React from 'react';
//import Button from '@mui/material/Button';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
//import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Character } from './pages/Character';
import { Armor } from './pages/Armor';
import { Enemy } from './pages/Enemy';
import { Weapon } from './pages/Weapon';
import { Item } from './pages/Item';
import { Location } from './pages/Location';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/character" element={<Character/>} />
          <Route path="/armor" element={<Armor/>} />
          <Route path="/enemy" element={<Enemy/>} />
          <Route path="/weapon" element={<Weapon/>} />
          <Route path="/item" element={<Item/>} />
        </Route>
      </Routes>
    </Router>
  )
  
}

export default App;
