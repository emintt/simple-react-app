import React from "react";
import { User } from "../../types";

type MyProps = { monsters: User[]};
type MyState = { null: unknown};

class CardList extends React.Component<MyProps, MyState> {
  render() {
    console.log(this.props.monsters);
    console.log('render from cardlist');
    const { monsters } = this.props;


    return (
      <div>
        {monsters.map((monster) => (
          <div>
            <h1 key={monster.id}>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}


export default CardList;
