import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Game1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameId: 1,
      isStarted: false,
      isUserPlay: false,
      values: undefined,
      secretCards: undefined,
      randomCards: undefined,
      points: 0,
      try: 3,
      cardStatus: [true, true, true, true, true, true, true, true, true,],
      timerOn: false,
      timeLeft: 10,
    }
  }
  render() {
    return (
      <div>
          1
      </div>
    );
  }
}

Game1.propTypes = {};

export default Game1;
