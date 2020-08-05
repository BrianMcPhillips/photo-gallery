import React from 'react';
import ImageList from './imageList.js';
import './App.css';
import Header from './Header.js';
import images from './data.js';
import { render } from '@testing-library/react';

function App() {
  return (
   <>
    <Header />
    <ImageList />
   </>
  );
}

export default App;
