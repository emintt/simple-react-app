
import './App.css'
import { Component } from 'react';
import React from 'react';
import { User } from './types';



type MyProps = { myProps: string};
type MyState = { monsters: User[] };

class App extends React.Component<MyProps, MyState> {
  constructor() {
    super();

    // initial state
    this.state = {
      monsters: [],

    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      )
    )
  }
  render() {
    console.log('render');
    return (
      <>
        <div className='App'>
          <input className='search-box' type="search" placeholder='search monster'
            onChange={(event) => {
              console.log({startingArray: this.state.monsters});
              const searchString = event.target.value.toLocaleLowerCase();
              const filteredMonsters = this.state.monsters.filter((user) =>  user.name.includes(searchString));
              console.log(filteredMonsters);
              this.setState(() => {
                return { monsters: filteredMonsters }
              }, () => {
                console.log({endingArray: this.state.monsters});

              });
           }}/>
          {this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
        </div>

      </>
    )
  }

}

export default App
