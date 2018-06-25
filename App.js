import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createDrawerNavigator,SafeAreaView} from 'react-navigation';
import MainScreen from './MainScreen';
import RecipeScreen from './RecipeScreen';
import AboutScreen from './AboutScreen';

 const StackNavigator=createStackNavigator(
  {
    Main:{screen:MainScreen},
    Recipe:{screen:RecipeScreen}
  },{
  	headerMode:'none'
  }
  );

 const DrawerNavigator=createDrawerNavigator(
 {
 	App:{screen:StackNavigator},
 	About:{screen:AboutScreen}
 })


export default class App extends React.Component {
	render(){
		return(
			<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
			<DrawerNavigator/>
			</SafeAreaView>
			)
	}
}

