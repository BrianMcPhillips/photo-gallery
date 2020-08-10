import React from 'react';
import ImageList from './imageList.js';
import './App.css';
import Header from './Header.js';
import images from './data.js';

const options = [
  "narwhal",
  "rhino",
  "unicorn",
  "unilego",
  "triceratops",
  "markhor",
  "mouflon",
  "addax",
  "chameleon",
  "lizard",
  "dragon"
];

export default class App extends React.Component {
  state = { keyword: '' }

  handleChange = (e) => {
    const keyword = e.target.value;
    this.setState({keyword:keyword})
  }

render() {
  const filteredImages = images.filter(image => image.keyword === this.state.keyword)
    return (
   <>
    <Header />
    <section>
      <select className="filter" onChange={this.handleChange} keyword={images.keyword}>
        {options.map(option => <option key ={option} value={option}>{option}</option>)}
      </select>
    </section>
    <ImageList data={filteredImages}/>
   </>
  );
}

}


