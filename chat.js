import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default class App extends Component
 {
    render()
    {
      return(
        <View style={{
            flex: 1,       
          }}>
            <View style={styles.header}>
            <Image 
            style={{ width: 205, height: 70,}}
            source={require('./assets/image/logo.png')}
          />        
             <Image style={styles.profile}
            source={require('./assets/image/1.jpg')}
          />  
           </View>
           <View style={styles.container}>
           <Image 
            style={{ width: 380, height: 500,}}
            source={require('./assets/image/video-screen.png')}
          />  
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
    header:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      padding: 8,
      marginBottom:5,
      backgroundColor:'white',
      borderColor: '#ffffff',
      borderWidth: 1,
      shadowColor: "#cccccc",
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  
  elevation: 4,
    },
    profile:{
      overflow:'hidden',
      borderRadius:50,
      width:50,
      height:50,
      position:'absolute',
      right:10,
      borderColor: '#cccccc',
      borderWidth: 1,
      
    },
    rectangle: {
      height: 235,
      width: '88%',
      backgroundColor: 'white',
      display:'flex',
      justifyContent:'center',
      alignSelf:'center',
      alignItems: 'center',
      textAlign:'center',
      borderRadius:8,
      // borderColor: '#dddddd',
      // borderWidth: 1,
      padding: 8,
      backgroundColor:'white',
      borderColor: '#ffffff',
      borderWidth: 1,
      shadowColor: "#cccccc",
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  
  elevation: 8,
  
    },
    cardicon: {
      width: 78, 
      height: 76,
      marginBottom:40,
    },
    cardtitle: {
      textAlign:'center',
      fontSize:20,
    },
    chattext:{
      position:'absolute',
      right:10,
    }
  });