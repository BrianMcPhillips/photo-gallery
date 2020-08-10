import React from 'react';



export default class ImageItem extends React.Component {
    render() {
        return <div className="content-container">
                    <img src={this.props.image} alt={this.props.title}/>
                   
                </div> 
            
    }
}