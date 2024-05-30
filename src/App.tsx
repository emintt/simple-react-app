
import './App.css'
import React from 'react';
import { User } from './types';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';



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

      )
    )
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField: searchField }
    });
  };

  render() {
    console.log('render from Appjs');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // searchField changes -> filterList changes -> display filter list
    const filteredMonsters = monsters.filter((user) =>  user.name.includes(searchField));
    return (
      <>
        <div className='App'>
          <SearchBox onChangeHandler={onSearchChange} placeholder='search monster' className='monster-search-box'/>
          <CardList monsters={filteredMonsters}/>
        </div>

      </>
    )
  }

}

export default App
