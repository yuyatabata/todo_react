import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickResult: '',
      changeResult: '',
      inputResult: '',
      keyupResult: '',
    };
  }

  onClick(){
    this.setState({clickResult:"clicked"});
  }

  onChange(e){
    this.setState({changeResult: e.target.value});
  }

  onInput(e){
    this.setState({inputResult: e.target.value});
  }

  onKeyup(e){
    this.setState({keyupResult: e.target.value});
  }

  render(){
    return(
      <div>
        <button onClick={this.onClick.bind(this)}>click</button>
        {this.state.clickResult}
        <br/>
        <input onChange={this.onChange.bind(this)} placeholder="change" />
        {this.state.changeResult}
        {/* {this.state.changeResult} */}
        <br />
        <input onInput={this.onInput.bind(this)} placeholder="input" />
        {this.state.inputResult}
        <br />
        <input onKeyUp = {this.onKeyup.bind(this)} placeholder="keyup"/>
        {this.state.keyupResult}
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
