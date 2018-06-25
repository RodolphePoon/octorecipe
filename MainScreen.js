import React from 'react';
import {View, Text,Stylesheet,Button,ScrollView,Image,TouchableOpacity} from 'react-native';
import Header from './components/Header';
import {Icon} from 'react-native-elements'
var recipes =require('./recipes.json');

export default class Main extends React.Component {
	
	render(){
		return(
			<View style={{flex:1, backgroundColor: 'white'}}>
			<Header 
			left={<Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>}
			center={<Text style={{fontSize: 20, textAlign: 'center'  }}>OCTORECIPES</Text>}
			right={<View style={{width:20}}/>}
			/>
			<ScrollView >
			<View>{recipes.map((item,index)=>(
				<TouchableOpacity key={index} style={{width: '100%',height:100,marginTop: 1}} onPress={()=>this.props.navigation.navigate('Recipe',{id:index})}>
				<Image style={{flex:1,}} source={{uri:item.image}} />
				<View style={{position: 'absolute' , backgroundColor: '#0008',width: '100%',height:100, justifyContent:'flex-end', alignItems: 'flex-end', padding:5 }}>
				<Text style={{color: 'white',fontSize: 16, fontWeight:'500', textAlign: 'right'  }}>{item.title}</Text>

				</View>
				</TouchableOpacity>
				))} </View>
			</ScrollView>
			</View>
			)
	}
}