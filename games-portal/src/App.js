import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, BrowserRouter, Switch } from 'react-router-dom'
import store from './js/store'

import Games from './js/Containers/Games'
import Stats from './js/Containers/Stats'
import Game1 from './js/Containers/Games/Game1'
import Game2 from './js/Containers/Games/Game2'
import Game3 from './js/Containers/Games/Game3'
import Game4 from './js/Containers/Games/Game4'
import Game5 from './js/Containers/Games/Game5'
import Game6 from './js/Containers/Games/Game6'
import Game7 from './js/Containers/Games/Game7'


ReactDOM.render (
  <BrowserRouter history = { browserHistory }>
    <Provider store = { store }>
      <Switch>
        <Route exact path = '/' component = { Games } />
        <Route path = '/games' component = { Games } />
        <Route path = '/stats' component = { Stats } />
        <Route path = '/game1' component = { Game1 } />
        <Route path = '/game2' component = { Game2 } />
        <Route path = '/game3' component = { Game3 } />
        <Route path = '/game4' component = { Game4 } />
        <Route path = '/game5' component = { Game5 } />
        <Route path = '/game6' component = { Game6 } />
        <Route path = '/game7' component = { Game7 } />
        <Route component = { Games } />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
