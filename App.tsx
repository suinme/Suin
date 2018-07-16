import * as React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Counter from './src/component/Counter';
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
      <RootStack />
    </SafeAreaView>
)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
