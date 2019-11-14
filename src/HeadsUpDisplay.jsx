import React from "react";
import GameInfo from "./GameInfo";
import DiceRoller from "./DiceRoller";
import EndTurnButton from "./EndTurnButton";

export default class HeadsUpDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dieOne: 0,
      dieTwo: 0
    };
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <GameInfo />
        <DiceRoller />
        <EndTurnButton />
      </React.Fragment>
    );
  }
}
