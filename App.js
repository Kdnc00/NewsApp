import React from 'react';
import { View,SafeAreaView,Text,FlatList,Image,StyleSheet,ScrollView ,Dimensions} from 'react-native';
import news_data from './news_data.json';
import {appStyles as styles } from "./styles";
import news_banner_data from './news_banner_data.json';
import  AsyncStorage from '@react-native-async-storage/async-storage';



function App(){
  



  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}

//'window'.localStorage.setItem("key","value");
//'window'.localStorage.getItem("key");
   
    function renderNews({ item }) {
    return <NewsCard news={item} />;
  }    
    return(
        <SafeAreaView style={styles.container}>
         <Text style={styles.headerText}>News</Text>
          <FlatList 
          ListHeaderComponent={()=>(
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {news_banner_data.map(bannerNews=>(
             <Image 
               style={styles.banner_image}
               source={{uri:bannerNews.imageUrl}}
             />
            ))}
          </ScrollView>
          )}
           keyExtractor={item => item.u_id.toString()}
           data={news_data}
           renderItem={renderNews}
          />
      
         
        
        </SafeAreaView>
    );
}
const NewsCard=({news})=>{
    return(
        <View style={styles.container}>
         <Image
          style={styles.image} source={{uri:news.imageUrl}}/>
         <View style={styles.inner_container}>
           <Text style={styles.title}>{news.title}</Text>
           <Text style={styles.description}>{news.description}</Text>
           <Text style={styles.author}>{news.author}</Text>
         </View>  
        </View>

    )
};
const appStyles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"blue",

      
  },
});

  


export default App;