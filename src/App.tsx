
import './App.css'
import React, { useEffect, useState } from 'react';
import { Post } from './types';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
  console.log('render from Appjs');
  const [searchField, setSearchField] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [newSearchField, setNewSearchField] = useState('');
  const [filteredPosts, setFilterPosts] = useState(posts);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);


  // filtered list only rely on posts -> make it a state and use effect
  useEffect(() => {
    const newfilteredPosts = posts.filter((post) =>  post.title.includes(searchField));

    setFilterPosts(newfilteredPosts);
    console.log('effect is firing');
  }, [posts, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const newChangeHandler =  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setNewSearchField(searchFieldString);
  };


  return (
    <>

      <div className='App'>
        <h1 className='app-title'>Companies</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search company' className='box'/>
        <input
          type="search"
          onChange={newChangeHandler}
        />
        <CardList posts={filteredPosts}/>
      </div>

    </>
  )

}

// type MyProps = { myProps: string};
// type MyState = { posts: Post[], searchField: string };

// class App extends React.Component<MyProps, MyState> {
//   constructor() {
//     super();

//     // initial state
//     this.state = {
//       posts: [],
//       searchField: ''

//     }
//   }

//   componentDidMount(): void {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) =>
//       this.setState(
//         () => {
//           return {
//             posts: posts,
//           };
//         },

//       )
//     )
//   }

//   onSearchChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField: searchField }
//     });
//   };

//   render() {
//     console.log('render from Appjs');
//     const { posts, searchField } = this.state;
//     const { onSearchChange } = this;

//     // searchField changes -> filterList changes -> display filter list
//     const filteredMonsters = posts.filter((post) =>  post.title.includes(searchField));
//     return (
//       <>
//         <h1 className='app-title'>Companies</h1>
//         <div className='App'>
//           <SearchBox onChangeHandler={onSearchChange} placeholder='search company' className='monster-search-box'/>
//           <CardList posts={filteredMonsters}/>
//         </div>

//       </>
//     )
//   }

// }

export default App
