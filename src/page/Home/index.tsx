import { createStackNavigator } from 'react-navigation';

import Header from './Header';
import TopicScreen from '../Post';
import HomeScreen from './Home';


export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            header: Header
          }),
    },
    Topic: { 
        screen: TopicScreen,
        path: 'topic/:tid',
        navigationOptions: ({ navigation }) => ({
            header: null
          }),
    },
});