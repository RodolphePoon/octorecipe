import React from 'react';
import {View, Text,Stylesheet,Button,Platform} from 'react-native';
import {Icon} from 'react-native-elements';

export default class CheckBox extends React.Component{

	state={checked:false}

	render(){
		return(
			<Icon 
			name={this.state.checked?'check-box':'check-box-outline-blank'}
			onPress={()=>this.setState({checked:!this.state.checked})} 
			/>
			)
	}
}