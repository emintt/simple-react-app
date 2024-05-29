
import './App.css'
import { Component } from 'react';
import React from 'react';
import { User } from './types';



type MyProps = { myProps: string};
type MyState = { monsters: User[], searchField: string };

class App extends React.Component<MyProps, MyState> {
  constructor() {
    super();

    // initial state
    this.state = {
      monsters: [],
      searchField: ''

    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      this.setState(
        () => {
          return {
            monsters: users,
          };
        },
        () => {
          console.log(this.state);
        }
      )
    )
  }
  render() {
    console.log('render');
    // move filtered list outside the callback so that we filter on the full list not on the filtered list
    // searchField changes -> filterList changes -> display filter list
    const filteredMonsters = this.state.monsters.filter((user) =>  user.name.includes(this.state.searchField));
    return (
      <>
        <div className='App'>
          <input className='search-box' type="search" placeholder='search monster'
            onChange={(event) => {
              console.log({startingArray: this.state.monsters});
              const searchField = event.target.value.toLocaleLowerCase();

              this.setState(() => {
                return { searchField: searchField }
              }, () => {
                console.log({endingArray: this.state.monsters});

              });
           }}/>
          {filteredMonsters.map((monster) => {
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
