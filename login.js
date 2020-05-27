import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableWithoutFeedback, StattusBartatusbar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView,Button} from 'react-native';


export default class login extends Component{
    render(){
        return(
             
                <View>
                <View style={styles.logocontainer}>
                  <Image style={styles.logo}
                  source={require('./assets/image/logo.png')}>                        
                  </Image>
                  
                </View>
                <View style={styles.infocontainer}>
                  <TextInput style={styles.input}
                  placeholder="Username"
                  returnKeyType='next'
                  autoCorrect={false}></TextInput>
                  
                  <TextInput style={styles.input} 
                  placeholder="Password"
                  keyboardType="go"
                  secureTextEntry
                  autoCorrect={false}></TextInput>
                   <Button title='Submit' />
                </View>
                </View>
              
        )
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    position: 'relative',
  },
  logocontainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:70,
  },
  logo:{
    width:205,
    height:70,
  },
   
  infocontainer:{
    padding:30
  },
  input:{
    marginBottom:20,
    padding:20,
    borderStyle:'solid',
    borderWidth:1
  }
});