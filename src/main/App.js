import React, {useState} from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import Rotas from './rotas';
import Navbar from '../components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='container' >
        <Rotas />
      </div>
    </>
  );
}

// class App extends React.Component{

//   state = {
//     numero1 : null,
//     numero2 : null,
//     resultado : null
//   }

//   somar = () => {
//     const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2);
//     this.setState({resultado : resultado});
//   }


//   render(){
//     return(
//       <div>
//         <label >Numero 1: </label> <br />
//         <input type="text" value={this.state.numero1} 
//           onChange={(e) => this.setState({numero1: e.target.value})} /> <br />

//         <label htmlFor="">Numero 2: </label><br />
//         <input type="text" value={this.state.numero2}
//           onChange={(e) => this.setState({numero2: e.target.value})} />

//       <br />
//         <button onClick={this.somar}> Somar</button><br />



//           <label>O resultado é : {this.state.resultado} </label>

//       </div>
//     )
//   }
// }

export default App;
