import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TextInput,FormLabel,Button,Keyboard} from 'react-native';


export default class AssignmentForm extends Component
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
           <View style={styles.infocontainer}>
            <Text style={styles.title}>Document Shareing</Text>
                  <TextInput style={styles.input}
                  placeholder="Document Name"
                  autoCorrect={false}></TextInput>
                  <TextInput style={styles.input}
                  placeholder="Document Description"
                  autoCorrect={false}></TextInput>
                  <TextInput style={styles.input}
                  placeholder="Upload Document"
                  autoCorrect={false}></TextInput>
                </View>
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
      }

  });