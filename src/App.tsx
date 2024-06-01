
import './App.css'
import React from 'react';
import { Post, User } from './types';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';



type MyProps = { myProps: string};
type MyState = { posts: Post[], searchField: string };

class App extends React.Component<MyProps, MyState> {
  constructor() {
    super();

    // initial state
    this.state = {
      posts: [],
      searchField: ''

    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) =>
      this.setState(
        () => {
          return {
            posts: posts,
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
    const { posts, searchField } = this.state;
    const { onSearchChange } = this;

    // searchField changes -> filterList changes -> display filter list
    const filteredMonsters = posts.filter((post) =>  post.title.includes(searchField));
    return (
      <>
        <h1 className='app-title'>Companies</h1>
        <div className='App'>
          <SearchBox onChangeHandler={onSearchChange} placeholder='search company' className='monster-search-box'/>
          <CardList posts={filteredMonsters}/>
        </div>

      </>
    )
  }

}

export default App
