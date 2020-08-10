import React from 'react';



export default class ImageList extends React.Component {
    render() {

        return ( 
            <div>
                <section>
                    <div className="image-container">
                        <ul>
                            {this.props.data.map(item => 
                                <ImageItem key={item.title} title={item.title} picture={item.url}/>
                            )}
                        </ul>
                    </div>
                </section>    
            </div>
        )
    }
}

class ImageItem extends React.Component {
    render() {
        const {title, picture} = this.props
        return (
            <div className="image">
                <li>
                    <h2>{title}</h2>
                    <img style={{height:'200px', width: '200px'}} src={picture} alt={title}/>
                </li>
                
            </div>
        )
    }
}

