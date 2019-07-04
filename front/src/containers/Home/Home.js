import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  GameArea, 
  AppWraper,
  Module,
  ModuleCard,
  ModuleCard1,
  ModuleCard2,
  ModuleCard3,
  ModuleCard4,
  ModuleCard5,
  ModuleCard6,
  ModuleCard7,  }from './styled';
import Game1 from '../Games/GameOne';
import Game2 from '../Games/GameTwo';
import Game3 from '../Games/GameThree';
import Game4 from '../Games/GameFour';
import Game5 from '../Games/GameFive';
import Game6 from '../Games/GameSix';
import Game7 from '../Games/GameSeven';
import Games from '../Games';

class Home extends Component {
  render() {
    return (
      <AppWraper>
        <Games />
      </AppWraper>
    );
  }
}

Home.propTypes = {};

export default Home;
