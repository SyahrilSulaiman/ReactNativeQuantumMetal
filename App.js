//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { color, fonts } from './Constant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import GetStarted from './Screens/GetStarted';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
//import { auth } from '.';

// import auth from '@react-native-firebase/auth'

//import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator()
const Tab 	= createBottomTabNavigator()

// create a component
const App = () => {

	// // Set an initializing state whilst Firebase connects
	// const [initializing, setInitializing] = useState(true);
	// const [user, setUser] = useState();

	// // Handle user state changes
	// function onAuthStateChanged(user) {
	// 	setUser(user);
	// 	if (initializing) setInitializing(false);
	// }
	
	// useEffect(() => {
	// 	const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
	// 	return subscriber; // unsubscribe on unmount
	// }, []);
	
	// if (initializing) return null;
	
	// if (!user) {
	// 	return (
	// 	  	<Login />
	// 	);
	// }

  	return (
    	<NavigationContainer>
			<Stack.Navigator initialRouteName='GetStarted' screenOptions={{ headerShown: false }}>
				<Stack.Screen name='GetStarted' component={GetStarted} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Dashboard' component={Dashboard} />
			</Stack.Navigator>
		</NavigationContainer>
  	);
};

// define your styles
const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
    	backgroundColor: color.white,
  	},
});

//make this component available to the app
export default App;
