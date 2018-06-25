import React from 'react';
import {View, Text,Stylesheet,Button,Platform} from 'react-native';

export default class Header extends React.Component {
	render(){
		const {style,left,right,center}=this.props;
		return(
			<View style={[{flexDirection:'row',paddingHorizontal: 10, height:Platform.OS === "ios" ? 64 : 56, justifyContent:'space-between',alignItems:'center',backgroundColor: 'white',borderBottomWidth: 1,borderColor: '#ccc'},style]}> 
			<View>{left}</View>
			<View style={{flex:1}}>{center}</View>
			<View>{right}</View>
			</View>
			)
	}

}