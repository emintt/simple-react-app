import React, { ChangeEvent } from "react";
import './search-box.styles.css';

type MyProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  placeholder: string,
  className: string
};
type MyState = { null: unknown};

class SearchBox extends React.Component<MyProps, MyState> {
  render() {
    console.log(this.props);
    console.log('render from searchbox');


    return (
      <input
        className={` search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    )
  }
}


export default SearchBox;

