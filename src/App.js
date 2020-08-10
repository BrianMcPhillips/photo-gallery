import React from 'react';
import ImageList from './imageList.js';
import './App.css';
import Header from './Header.js';
import images from './data.js';


function App() {
  return (
   <>
    <Header />
    <ImageList data={images}/>
   </>
  );
}

export default App;
