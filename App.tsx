import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation';

import NavigationService from './src/component/NavigationService';
import {Routers} from './src/constans';
import HomeScreen from './src/page/Home';
import ExploreScreen from './src/page/Explore';
import AccountScreen from './src/page/Account';
import MessageScreen from './src/page/Message';

const NavRouter = {}
NavRouter[Routers.Home] = HomeScreen;
NavRouter[Routers.Message] = MessageScreen;
NavRouter[Routers.Explore] = ExploreScreen;
NavRouter[Routers.Account] = AccountScreen;
const RootStack = createBottomTabNavigator(
  NavRouter,
  {
    initialRouteName: Routers.Home,
  }
);

const App = () => (
    <SafeAreaView style={styles.container}>
      <RootStack ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)}} />
    </SafeAreaView>
)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
