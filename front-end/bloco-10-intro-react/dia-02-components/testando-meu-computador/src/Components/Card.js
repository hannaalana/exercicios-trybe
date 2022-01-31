import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <article>
           <img src={this.props.imgUrl}></img>
            <h3>{this.props.modulo}</h3>
            <h2> {this.props.title}</h2>
            </article>

        )
    }
}

export default Card;