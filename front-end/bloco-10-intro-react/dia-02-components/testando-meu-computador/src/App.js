import React from 'react';
import Card from './Components/Card'

class App extends React.Component {
  render (){
    return (
   <main>
     <div>
       <h1>Conteúdo</h1>
       <p>Acesse a agenda de cada módulo abaixo, ou continue aprendendo com nossas aulas ao vivo e trilha de Soft Skills. </p>
       <section>
        <Card title="Fundamentos do Desenvolvimento Web" modulo="Modulo 1" imgUrl='https://app.betrybe.com/static/media/fundamentals.d4ce6da9.svg'/>
        <Card title="Front-End" modulo="Modulo 2" />
        <Card title="Back-End" modulo="Modulo 3" />
        <Card title="Ciência da Computação" modulo="Modulo 4" />



       </section>
     </div>

   </main>
      );
  }

}

export default App;
