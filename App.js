import React from 'react';
import { View,SafeAreaView,Text,FlatList,Image,StyleSheet,ScrollView ,Dimensions} from 'react-native';
import news_data from './news_data.json';
import {appStyles as styles } from "./styles";
import news_banner_data from './news_banner_data.json';


function App(){
    const renderNews=({item})=> <NewsCard news={item} />;    
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