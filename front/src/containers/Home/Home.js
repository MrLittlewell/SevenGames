import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Games';
import { 
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

class Home extends Component {
  render() {
    return (
      <AppWraper>
        <main>
        <Tabs>
          <ModuleCard1 />
          <Game1 />
          <ModuleCard2 />
          <Game2 />
          <ModuleCard3 />
          <Game3 />
        </Tabs>
      </main>
      </AppWraper>
    );
  }
}

Home.propTypes = {};

export default Home;
