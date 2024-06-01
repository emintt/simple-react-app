import React from "react";
import { Post } from "../../types";
import './card-list.styles.css';
import Card from "../card/card";

type MyProps = { posts: Post[]};
type MyState = { null: unknown};

class CardList extends React.Component<MyProps, MyState> {
  render() {
    console.log(this.props.posts);
    console.log('render from cardlist');
    const { posts } = this.props;


    return (
      <div className="card-list">
        {posts.map((post) => {
          return (
            <Card post={post} />
        )})}
      </div>
    )
  }
}


export default CardList;
