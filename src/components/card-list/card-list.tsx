import { Post } from "../../types";
import './card-list.styles.css';
import Card from "../card/card";

const CardList = (props: {posts: Post[]}) => {
  const { posts } = props;
  return (
    <div className="card-list">
      {posts.map((post) => {
        return (
          <Card post={post} key={post.id}/>
      )})}
    </div>
  )
};

// type MyProps = { posts: Post[]};
// type MyState = { null: unknown};

// class CardList extends React.Component<MyProps, MyState> {
//   render() {
//     // console.log(this.props.posts);
//     // console.log('render from cardlist');
//     const { posts } = this.props;


//     return (
//       <div className="card-list">
//         {posts.map((post) => {
//           return (
//             <Card post={post} key={post.id}/>
//         )})}
//       </div>
//     )
//   }
// }


export default CardList;
