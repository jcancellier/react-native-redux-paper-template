import {
	createStackNavigator,
	createSwitchNavigator
} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';

// Authentication Stack
const AuthStack = createStackNavigator({
	LoginScreen
});

const DashboardStack = createStackNavigator({
	DashboardScreen,
}, {
		headerLayoutPreset: 'left'
	})

// Main Navigation (Root)
const MainStack = createStackNavigator(
	{
		DashboardStack,
	},
	{
		headerLayoutPreset: 'left',
		headerMode: 'none',
	}
)

// Controller between AuthStack and MainStack
export const createRootNavigator = (initialLaunch = true) => {
	return createSwitchNavigator(
		{
			AuthStack,
			MainStack
		},
		{
			initialRouteName: initialLaunch ? 'AuthStack' : 'MainStack'
		}
	);
};
