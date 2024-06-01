import './card.styles.css';
import { Post } from '../../types';
import CompanyImg from '../../assets/company.jpg';

const Card = (props: {post: Post}) => {
  const { title, body, id } = props.post;
  return (
    <div className="card-container" key={id}>
      <img src={CompanyImg} alt={`company ${title}`} />
      <h2 key={id}>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

// type MyProps = { post: Post};
// type MyState = { null: unknown};

// class Card extends React.Component<MyProps, MyState> {
//   render() {
//       const { title, body, id } = this.props.post;
//     return (
//       <div className="card-container" key={id}>
//         <img src={CompanyImg} alt={`company ${title}`} />
//         <h2 key={id}>{title}</h2>
//         <p>{body}</p>
//       </div>

//    )
//   }
// }

export default Card;
