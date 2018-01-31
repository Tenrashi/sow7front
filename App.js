
import React from 'react';
import {TabNavigator} from 'react-navigation';
import TabOne from "./components/TabOne";
import index from "./components/Index";
import camera from "./components/Camera";

export default TabNavigator({
  TabOne: { screen: TabOne },
  camera: { screen: camera },
  index: { screen: index },
});
