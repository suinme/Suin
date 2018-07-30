import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import {Routers} from './constants';
import HomeScreen from './page/Home';
import ExploreScreen from './page/Explore';
import AccountScreen from './page/Account';
import MessageScreen from './page/Message';
import SignupScreen from './page/Signup';
import AuthLoadingScreen from './page/Signup/AuthLoading';


const AppStack = createBottomTabNavigator({
    Main: {
        screen: HomeScreen,
        tabBarComponent: null,
        navigationOptions: ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index){
                let { routeName } = navigation.state.routes[navigation.state.index];
                tabBarVisible = routeName == Routers.Main;
            }
            return {
                header: null,
                tabBarVisible: tabBarVisible
            }
        }
    },
    Message: {
        screen: MessageScreen
    },
    Explore: {
        screen: ExploreScreen
    },
    Account: {
        screen: AccountScreen
    }
});

const AuthStack = createStackNavigator({ SignUp: SignupScreen });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);