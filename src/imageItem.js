import React from 'react';
import images from './data.js';


export default class ImageItem extends React.Component {
    render() {
        return <div className="content-container">
                    <img src={this.props.image} alt={this.props.title}/>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div> 
            
    }
}