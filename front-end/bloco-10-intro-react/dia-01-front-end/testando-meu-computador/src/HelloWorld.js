import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        const element = (
            <h1 className='hello-world'> Hello, World! </h1>
        )

        const currentLearning = (subject) => {
            return (
                <h2>Estou aprendendo sobre {subject}</h2>
            )
        }

        const arrayFood = ["Churrasco", "Hamburguer", "Xis"]




        return (
            <>
            { element }
            <p> Estou aprendendo React</p >
            <div>
                <p> Teste</p>
            </div> 
            {currentLearning("ReactJs")} 
            <ul>
                {arrayFood.map((food) => {
                    return <li key={food}>{food}</li>
                })}
            </ul>            
            </>
        )
    } 
}

export default HelloWorld;