import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,FlatList,ActivityIndicator } from 'react-native';

export default class Test extends Component {
 constructor(){

  super()
  this.state={
    dataSource: [],
    isLoading: true
  }
 }
 renderItem=() =>{
   return(

   <view style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}>
     <text style={{fontSize: 18, color: 'green', marginBottom: 15}}>
       {item.title}
     </text>
     <text style={{fontSize: 18, color: 'red', marginBottom: 15}}>
       {item.body}
     </text>
   </view>
   )
 }
 renderSeparator=()=>{
return(

  <view
  Style={{height: 1, width: '100%', backgroundColor: 'black'}}>
  /</view>
)

 }
 componentDidMount(){
   const url='https://jsonplaceholder.typicode.com/posts'
   fetch(url)
   .then((response) => response.json())
   .then((responseJson) => {
     this.setSrate({
       dataSource: responseJson,
       isLoading: false
     })
   })
   .catch((error)=>{
     console.log(error)
   })
 }
 render()
 { 
  return (
    this.state.isLoading
    ?
    <view style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <ActivityIndicator size="large" color="#966333" animating/>
    </view>
    :
    <View style={styles.container}>
      <FlatList
  data={this.state.dataSource}
  renderItem={this.renderItem}
  keyExtractor={(item,index)=> index}
  ItemSeparatorComponent={this.renderSeparator}
/>
    </View>
  );
}


}
const styles =StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#F5FCFF'
}

});