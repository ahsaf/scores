import React from 'react';
import { View,Text,TextInput, StyleSheet,Button, AsyncStorage, TouchableHighlight } from 'react-native';


export default class Addply extends React.Component {
state={
    players:[],
    user:{
        name:''
        
    },
    msg:''
}
componentDidMount(){
    AsyncStorage.removeItem('livep');
    AsyncStorage.removeItem('tabl');
}
click =()=>{
    if(this.state.user.name){
        if(this.state.players.length > 7){
            this.setState({msg:'Maximum 8 players allowed.'})
        }else{
            const np = this.state.players.push(this.state.user.name)
            this.setState({np})
            this.setState({user:{name:''},msg:''})
        }
      
    
    }else{
        this.setState({msg:'Fill the field.'})
    }
    
    
    
}
static navigationOptions = {
    header: null
  }
startpl =()=>{
if(this.state.players.length === 0){
    this.setState({msg:'Minimum one player required.'})
}else{
    AsyncStorage.setItem('livep',JSON.stringify(this.state.players));
    this.props.navigation.navigate('Live');
}

}

    
render (){
    
return(
    <View style={{flex:1,backgroundColor:'#ecf0f1'}}>
        <Text style={styles.head}>Add Players</Text>
        
        <View style={{marginLeft:5}}>
            {this.state.players.map((player, i) => {
                return(
                    <View style={{flexDirection:'row'}}  key={i}>
                <Text style={styles.plys}>Player {i+1}: <Text style={{color:'#2ecc71',fontWeight:'bold'}}>{player}</Text></Text>
                <TouchableHighlight  onPress={()=>{
                     this.setState(state =>({
                        players: state.players.filter(item => item !== player)
                    }))
                }} style={{position:'absolute',right:5}}><Text style={{color:'#c0392b',fontSize:25}}>X</Text></TouchableHighlight>
                </View>
                )
            })}
        </View>
        <View style={styles.newbox}>
        <TextInput style={styles.textin} placeholder='Enter Name..' onChangeText={(text) => {this.setState({user:{name:text}})}} value={this.state.user.name} />
       <View style={styles.addbtn}>
        <Button title='Add' onPress={this.click} /></View></View>
        <Text style={{color:'red',fontSize:20}}>{this.state.msg}</Text>
        <View style={styles.strbtn}><Button  title='Start' onPress={this.startpl} /></View>
        
    </View>
)
}



}

const styles = StyleSheet.create({
head:{
    marginTop:30,
    fontSize:30,
    color:'black',
    textAlign:'center'
    
},
addbtn:{
    flex:2,
    marginLeft:5,
    marginTop:12,
    marginRight:5

},
textin:{
    marginLeft:5,
    flex:8,
    borderColor:'#3498db',
    borderWidth:2,
    backgroundColor:'#ecf0f1',
    marginBottom:10,
    marginTop:10,
    fontSize:25,
    paddingLeft:5
},
plys:{
    fontSize:25
},
newbox:{
    flexDirection:'row'
   
},
strbtn:{
    marginTop:5,
    
    marginLeft:5,
    marginRight:5,
    flex:1
    
}
});