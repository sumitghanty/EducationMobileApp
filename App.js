import 'react-native-gesture-handler';
import * as React from 'react';
//import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function StudentScreen() {
  return (
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
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/video-icon.png')}
    />
     <Text style={styles.cardtitle}>Video Conferencing Session</Text>
     </View>
   </View>
   <View style={styles.container}>
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/search-course.png')}
    />
     <Text style={styles.cardtitle}>Search Course</Text>
     </View>
   </View>
   <View style={styles.container}>
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/search-course.png')}
    />
     <Text style={styles.cardtitle}>Search Course</Text>
     </View>
   </View>
   </View>
   
  );
}

function TeacherScreen() {
  return (
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
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/upload-icon.png')}
    />
     <Text style={styles.cardtitle}>Study Material Updations,
communications</Text>
     </View>
   </View>
   <View style={styles.container}>
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/planning.png')}
    />
     <Text style={styles.cardtitle}>Lesson Planning</Text>
     </View>
   </View>   
   </View>
  );
}

function ParentScreen() {
  return (
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
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/transport.png')}
    />
     <Text style={styles.cardtitle}>Transport Status
</Text>
     </View>
   </View>
   <View style={styles.container}>
     <View style={styles.rectangle}>
     <Image 
      style={styles.cardicon}
      source={require('./assets/image/dashboard.png')}
    />
     <Text style={styles.cardtitle}>Pupil Progress</Text>
     </View>
   </View>   
   </View>
  );
}

function AdminScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator activeColor="#ffffff"
    inactiveColor="#ff8d9e" barStyle={{ backgroundColor: '#ea334f', paddingBottom:16,}}>
      <Tab.Screen name="Student" component={StudentScreen} />
      <Tab.Screen name="Teacher" component={TeacherScreen} />
      <Tab.Screen name="Parents" component={ParentScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <MyTabs />
    </NavigationContainer>
  );
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
// const App = () => {
//   return (
//      <ImagesExample />
     
//   )
// }
//  export default App

