import React, { Component } from 'react';

class Header extends Component{
    render(){
        const conteudos = (
            <h1 className='title'>Conteúdos de Front-End</h1>
        )


        return (
            <>
            {conteudos}
            </>      
        );
    }
}

export default Header;