import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation';

import NavigationService from './src/component/NavigationService';

import RootStack from './src/navigator';

const App = () => (
    <RootStack ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)}} 
        style={styles.container}/>
)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
