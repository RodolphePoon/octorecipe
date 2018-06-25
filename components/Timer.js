import React from 'react';
import {View, Text,StyleSheet,Button,TextInput,Alert} from 'react-native';

export default class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      countDown : false,
      remainingSeconds : 0,
      interval : null,
    };
  }

  handleStart() {
    var ival = setInterval(() => {
      if ((this.state.remainingSeconds > 0) && this.state.countDown) {
        this.setState({remainingSeconds : this.state.remainingSeconds - 1})
      }else if((this.state.remainingSeconds == 0) && this.state.countDown){
        Alert.alert('title', 'message')
        clearInterval(this.state.interval);
        this.setState({countDown:false,interval:null})
      }
    }, 1000);

    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds, 
        countDown : true,
        interval : ival,
      };
    });
  }

  handleStop() {
    clearInterval(this.state.interval);
    this.setState(prevState => {
      return {
        remainingSeconds : prevState.remainingSeconds,
        countDown : false,
        interval : null,
      };
    });
  }

  handleReset() {
    clearInterval(this.state.interval);
    this.setState({
        remainingSeconds : 25 * 60, 
        countDown : false,
      });
  }

formatRemainingMinutes(remainingSeconds){
  let numMinutes = Math.floor(remainingSeconds / 60);
  let res=''
   if (numMinutes.toString().length == 1) {
      res = '0'+numMinutes.toString();
    }else if(numMinutes.toString().length == 0){
      res = '00';
    } else {
      res = numMinutes.toString();
    }
  return res
}

  formatRemainingSeconds(remainingSeconds) {
    let numSeconds = remainingSeconds % 60;
    let res = "";
    if (numSeconds.toString().length == 1) {
      res += '0'+numSeconds.toString();
    }else if(numSeconds.toString().length == 0){
      res = '00';
    } else {
      res = numSeconds.toString();
    }

    return res;
  }

  formatSeconds=(time)=>{
    clearInterval(this.state.interval);
    let {remainingSeconds}=this.state
    let tmp =parseInt(time.slice(-2));
    if(tmp==NaN||time.length==0){
      tmp=0
    }
    let res=tmp+remainingSeconds-remainingSeconds%60
    this.setState({remainingSeconds:res,countDown : false, interval : null,})
  }

   formatMinutes=(time)=>{
    clearInterval(this.state.interval);
    let {remainingSeconds}=this.state
    let tmp=parseInt(time.slice(-2))*60;

    if(tmp==NaN||time.length==0){
      tmp=0
    }
    
    let res=tmp+remainingSeconds % 60;
    this.setState({remainingSeconds:res,countDown : false, interval : null,})
  }

  render() {
    return (
      <View style={{borderWidth: 1}}>
      <View style={{flexDirection: 'row' ,alignSelf:  'center' }}>
      <TextInput 
        style={styles.timer}
        onChangeText={(time) => this.formatMinutes(time)}
        keyboardType='numeric'
        placeholder='00'
        value={this.formatRemainingMinutes(this.state.remainingSeconds)} 
        />
      <Text style={styles.timer}>:</Text>
      <TextInput 
        style={styles.timer}
        onChangeText={(time) => this.formatSeconds(time)}
        keyboardType='numeric'
        placeholder='00'
        value={this.formatRemainingSeconds(this.state.remainingSeconds)} 
        />
       </View>
        {this.state.countDown? <Button 
          title="Stop" 
          color="red" 
          onPress={() => this.handleStop()}
        />  :<Button 
          title="Start" 
          color="green" 
          onPress={() => this.handleStart()}
        /> 
        }
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timer: {
    margin: 0,
    fontSize: 48,
    width: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});