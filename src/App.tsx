import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react';


class App extends Component {
    constructor() {
      super();
      this.state = {
        name: 'Liem'
      }
    }
  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p>Hi {this.state.name}</p>
        <button onClick={() => {
          this.setState({name: 'Anni'})
        }}>Change name</button>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

}

export default App
