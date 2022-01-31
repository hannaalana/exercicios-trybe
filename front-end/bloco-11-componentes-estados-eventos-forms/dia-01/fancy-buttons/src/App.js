import './App.css';
import React from  'react';



class App extends React.Component {
  constructor(){
    super()
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);

    this.state = {
      click0: 0,
      click1: 0,
      click2: 0,
    }
  }

  handleClick0(){
    console.log('Deu booom!', this);
    this.setState((prev) => ({
      click0: prev.click0 + 1, 
    }));
    }
    
    handleClick1(){
      console.log('Deu legal!', this);
      this.setState((prev) => ({
        click1: prev.click1 + 1, 
      }));
      }
    
    handleClick2(){
        console.log('Deu brasil!', this);
        this.setState((prev) => ({
          click2: prev.click2 + 1, 
        }));
        }

      getButtonColor(num) {
        // Essa função contém um ternário que realiza a lógica para mudarmos
        // a cor do botão para verde quando for um número par
        return num % 2 === 0 ? 'green' : 'white';
      }


  render(){
    const { click0, click1, click2 } = this.state
    return (
    <div>
      <button onClick={this.handleClick0} style={{ backgroundColor: this.getButtonColor(click0) }}>Botão 1 | Count = {this.state.click0}</button>
      <button onClick={this.handleClick1} style={{ backgroundColor: this.getButtonColor(click1) }}>Botão 2 | Count = {this.state.click1}</button>
      <button onClick={this.handleClick2} style={{ backgroundColor: this.getButtonColor(click2) }}>Botão 3 | Count = {this.state.click2}</button>
    </div>
    )
  }
}

export default App;
