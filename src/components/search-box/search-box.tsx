import React from "react";
import './search-box.styles.css';

const SearchBox = (props: {className: string; placeholder: string; onChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void}) => {

const { className, placeholder, onChangeHandler } = props;

return (
  <input
    className={` search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
)
};

// type MyProps = {
//   onChangeHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
//   placeholder: string,
//   className: string
// };
// type MyState = { null: unknown};

// class SearchBox extends React.Component<MyProps, MyState> {
//   render() {
//     // console.log(this.props);
//     // console.log('render from searchbox');


//     return (
//       <input
//         className={` search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }


export default SearchBox;

