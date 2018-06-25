import React from 'react';
import {View, Text,Stylesheet,Button} from 'react-native';
import Header from './components/Header';
import {Icon} from 'react-native-elements'
export default class About extends React.Component {

	
	render(){
		return(
			<View style={{flex:1, backgroundColor: 'white'}}>
			<Header 
			left={<Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>}
			center={<Text style={{fontSize: 20,textAlign: 'center' }}>ABOUT</Text>}
			right={<View style={{width:20}}/>}
			/>
			<View style={{flex:1, padding:10}}> 
			<Text style={{marginBottom: 10}}>Application Version 1.0.0 </Text>
			<Text style={{marginBottom: 10}}>{"Question for you:\nWhat's a better than octopus recipe?﻿ \nAnswer for you:\n8 recipes for octopus."}</Text>
			<Text style={{marginBottom: 10}}>Tribute to my grand mother who gave me a family recipe before she died in a horrible way...</Text>
			<Text>Erlich Bachman is fat and poor</Text>
			</View>
			</View>
			)
	}
}