import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';


export default class AssignmentDetails extends Component
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
           <Text style={{ fontSize:28,}}>Assignment Details</Text> 
           <View>            
           <Text style={{ paddingTop:10,}}>Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the navigation state object except index and routes, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.</Text>
           <Text style={{ paddingTop:10,}}>Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the navigation state object except index and routes, unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.</Text>
           <Text style={{ paddingTop:10,}}>If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.</Text>
           </View>
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
      padding: 5,
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
  
  elevation: 1,
    },
    profile:{
      overflow:'hidden',
      borderRadius:50,
      width:50,
      height:50,
      position:'absolute',
      right:10,
      borderColor: '#bbb',
      borderWidth: 1,
      
    },
    infocontainer:{
      padding:10
    },
    title:{
        textAlign:'center',
        fontSize:20,
        paddingBottom:20,
      },
      
      input:{
        marginBottom:20,
        padding:20,
        borderStyle:'solid',
        borderWidth:1
      },
      rectangle: {
        height:150,
        marginBottom:20,
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
        fontSize:18,
      },

  });