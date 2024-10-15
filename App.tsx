/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
 const [background , setbackground] = useState ('#ffffff')
 const [buttonbackground , setbuttonbackground] = useState ('#ffffff')

  const buttonpress = () =>{
    const character = '0123456789ABCDE'
    var bgcolor ="#"
    var buttonbgcolor ="#"

    for(let i=0 ;i< 6 ; i++ ){
      var randomIndex = Math.floor(Math.random()* 16 )
       var randomIndexbutton = Math.floor(Math.random()* 16 )
      bgcolor += character[randomIndex]
       buttonbgcolor += character[randomIndexbutton]
    }

    setbuttonbackground(buttonbgcolor);
    setbackground(bgcolor);
  }



  return (
    <SafeAreaView>
        <View style = {[styles.mainContainer, {backgroundColor : background}]}>
          <View style = {styles.actionContainer}>
            <Pressable
             style = {[styles.button, {backgroundColor: buttonbackground}]}
              onPress={buttonpress}
            >  
              <Text>Change Backgorund</Text>
              </Pressable>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent:'center',
    alignItems:'center',
    height : 840,
    borderWidth : 2 
   },
  actionContainer:{},
  button:{
    borderWidth:2,
    backgroundColor : "515141",
    height : 70,
    width:170, 
    justifyContent : 'center',
    alignItems:'center', 
    borderRadius : 10, 
   }, 
});

export default App;
