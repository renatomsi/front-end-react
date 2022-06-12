import React, {useState} from 'react';
import Login from './views/login';

import 'bootswatch/dist/minty/bootstrap.css'
import './custom.css'

function App() {
  return (
    <div >
      <Login />
    </div>
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
