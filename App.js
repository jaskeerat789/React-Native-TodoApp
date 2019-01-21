import React from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,} from 'react-native';
//import {Button} from 'native-base';
import {Button,List,ListItem} from 'react-native-elements'
export default class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      arr:['hello'],
      temp:'',
      refresh:true,
    }
  }

  save=()=>{
      this.setState((pre)=>{arr:pre.arr.push(pre.temp);temp:''})
      this.setState({refresh:!this.state.refresh},()=>{console.log(this.state.refresh);})
  }
  printing=()=>{
    console.log(this.state);
    
  }
  delete=(item)=>{
    console.log("deleting",item);
    var index =this.state.arr.indexOf(item)
    this.setState((pre)=>{arr:pre.arr.splice(index,1)})
    this.setState({refresh:!this.state.refresh},()=>{console.log(this.state.refresh);})
  }
  strike=(item)=>{
    console.log("striking",item);
    var temp=this.state.arr
    var index=temp.indexOf(item)
    function strikeThrough(text) {
      return text
        .split('')
        .map(char => char + '\u0336')
        .join('')
    }
    temp[index]=strikeThrough(item)
    this.setState((pre)=>{arr:temp})
    this.setState({refresh:!this.state.refresh},()=>{console.log(this.state.refresh);})
  }
  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.enter}>
          <TextInput style={styles.input}
                    
                    placeholder="enter here"
                    onChangeText={(temp) => {this.setState({temp});}}
                    clearTextOnFocus={true}
                    
                    />
          <Button title="ADD "
                  buttonStyle={[styles.button0,{backgroundColor:'#09ffea',}]}
                  textStyle={{color:'black'}}
                  titleStyle={{alignItems:'center'}}
                  onPress={this.save}
                  
                  rounded={true}
                  />
        </View>      
        <FlatList style={{flex:1,width:'100%',borderWidth:0,marginTop:5}}
          data={this.state.arr}
          extraData={this.state.refresh}
          renderItem={({ item })=>
          <View style={styles.listContainer}>
          <Text style={styles.textList}>{item}</Text>
          <Button 
                  title='Done'       
                  buttonStyle={[styles.button1,{backgroundColor:'#22d841'}]}
                  onPress={()=>{this.strike(item)}}
                  />
          <Button 
                  title='Delete' 
                  buttonStyle={[styles.button1,{backgroundColor:'#ff0a0a'}]}
                  onPress={()=>this.delete(item)}
            />
          
          </View>
          }
          keyExtractor={({ item })=>item}
        />
        
         
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal:0,
    paddingTop: 23,
    paddingBottom: 20,
  },
  enter:{
    flexDirection:'row',
    width:'100%',
    height:'10%',
    alignSelf: 'stretch',
    borderWidth:0,
    padding:5
  },
  input:{
    paddingLeft:5,
    borderWidth:1,
    width:'75%',
    borderRadius:20,
    borderColor:'#bdbdbe'
  },
  button0:{
    alignItems:'center',
    width:'60%',
    paddingRight:5,
    borderRadius:20,
    
   },
  list:{
    flexDirection:'row',
    marginLeft:10,
    marginRight:0,
    paddingVertical:5,

  },
  button1:{
    height:'80%',
    borderRadius:20,
    borderWidth:1,
    marginLeft: 0,
    marginRight: 0,
    marginVertical:5,
    // backgroundColor:'#22d841'
  },
  textList:{
    paddingVertical:5,
    paddingHorizontal:10,
    width:'50%',
    fontSize:18,
  
  },
  listContainer:{
    flexDirection:'row',
    height:50,
    borderTopWidth:1,
    borderTopColor:'#d6d9dc'
  },
});