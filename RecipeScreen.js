import React from 'react';
import {View, Text,StyleSheet,Button,ScrollView,Image} from 'react-native';
import Header from './components/Header';
import CheckBox from './components/CheckBox';
import Timer from './components/Timer';

import {Icon} from 'react-native-elements';
import {WebBrowser } from 'expo';
var recipes =require('./recipes.json');


export default class Recipe extends React.Component {
	
	render(){
		const {title,image,ingredients,tools,directions,website}=recipes[this.props.navigation.state.params.id]
		return(
			<View style={{flex:1,backgroundColor: 'white'}}>
			<Header 
			left={<Icon name='arrow-back' onPress={()=>this.props.navigation.goBack(null)}/>}
			center={<Text style={{fontSize: 20, maxWidth: '90%',textAlign:'center',alignSelf: 'center'   }} numberOfLines={1}>{title}</Text>}
			right={<View style={{width:20}}/>}
			/>
			<ScrollView style={{paddingHorizontal: 10}}>
			<View style={{alignSelf: 'center',margin: 10 }}>
			<Image style={{height:200, width: 200,alignSelf:  'center'  }} resizeMode='contain' source={{uri:image}} />
			<Text style={{textAlign:'center'}}>{title}</Text>
			</View>
			<View style={styles.section}>
			<Text style={styles.subtitle}>Ingredients</Text>
			{ingredients.map((item,index)=>(
				<View key={index} style={{flexDirection: 'row', alignItems:'center' }}>
				<CheckBox/>
				<Text style={{margin:5}}>{item}</Text>
				</View>))}
			</View>
			<View style={styles.section}>
			<Text style={styles.subtitle}>Tools</Text>
			{tools.map((item,index)=>(<Text key={index}>- {item}</Text>))}
			</View>
			<View style={styles.section}>  
			<Text style={styles.subtitle}>Instructions</Text>
			{directions.map((item,index)=>(<Text key={index} style={{marginBottom: 3}}>Step {index+1}: {item.text}</Text>))}
			</View>
			<Text>source: <Text onPress={()=>{WebBrowser.openBrowserAsync(website)}} style={{ color:'blue', textDecorationLine:'underline'}}>{website}</Text></Text>
			</ScrollView>
			</View>
			)
	}
}

const styles= StyleSheet.create({
	subtitle:{fontWeight: 'bold',marginBottom: 5},
	section:{marginVertical: 10}
})