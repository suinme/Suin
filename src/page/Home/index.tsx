import { createStackNavigator } from 'react-navigation';

import PostScreen from '../Post';
import HomeScreen from './Home';


export default createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Post: { screen: PostScreen },
});