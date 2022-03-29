import React from 'react';
import {Dimensions, StyleSheet } from 'react-native';



export const appStyles=StyleSheet.create({
  container:{
      backgroundColor:'white',
      margin:10,
      borderRadius:10,

  },
  image:{
      height:Dimensions.get('window').height/4,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
  },
  title:{
      fontWeight:'bold',
      fontSize:18,

  },
  description:{
      marginTop:3,

  },
  inner_container:{
    padding:5,
  },
  author:{
    fontStyle:'italic',
    textAlign:'right',
    //alignItems:'flex-end',
  },
  banner_image:{
    height:Dimensions.get('window').height/5,
    width:Dimensions.get('window').width /2,
  },
  headerText:{
    fontWeight:'bold',
    fontSize:50,

  },


});