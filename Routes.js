import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Thumbnail } from 'native-base';
import Home from './app/screens/Home'
import Starter from './app/screens/Starter'
import Activate from './app/screens/Activate'
import Development from './app/screens/Development'
import Advanced1 from './app/screens/Advanced1'
import Advanced2 from './app/screens/Advanced2'

const Routes = () => (
   <Router >
      <Scene key = "root" >
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "starter" component = {Starter} title = "Starter" />
         <Scene key = "activate" component = {Activate} title = "Activate" />
         <Scene key = "development" component = {Development} title = "Development" />
         <Scene key = "advanced1" component = {Advanced1} title = "Advanced1" />
         <Scene key = "advanced2" component = {Advanced2} title = "Advanced2" />
      </Scene>
   </Router>
)
export default Routes