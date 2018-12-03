import React from 'react';
import { View,Text,TextInput, StyleSheet,Button, AsyncStorage, BackHandler,ScrollView } from 'react-native';
import { withNavigationFocus } from 'react-navigation';


 class Live extends React.Component {
state={
    players:[],
    tab:[]
  
}


click =()=>{
    const np = this.state.players.push(this.state.user.name)
    this.setState({np})
    this.setState({user:{name:''}})
    
    
}
componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', ()=> {
        const { dispatch, nav } = this.props;
        if(nav === 0){
            return false;
        }
        this.props.navigation.navigate('Home');
        return true;
    })
    AsyncStorage.getItem('livep').then(data =>{
          if(data !== null){

            this.setState({players:JSON.parse(data)});
            
          }});
          
 
}
static navigationOptions = {
    header: null
  }
    
render (){
if(this.props.isFocused){
    AsyncStorage.getItem('tabl').then(data =>{
        if(data !== null){

            this.setState({tab:JSON.parse(data)});
          
        }});
}
   
return(
    <ScrollView style={{backgroundColor:'#ecf0f1'}}>
    <View style={{flex:1}}>
        <Text style={styles.head}>Score Table</Text>
        
        <View style={{flexDirection:'row',flex:1}}>
            {

         
                this.state.players.map((player, i) => {
                    
                    if(this.state.tab.length === 0){
                      if(i+1 !==  this.state.players.length){
                        return(
                            <View key={i}style={{flex:1}}>
                        <Text  style={{fontSize:20,borderRightColor:'#7f8c8d',
                                 borderRightWidth:3,textAlign:'center'}}>{player}</Text>
                        </View>
                        )
                      }else{
                        return(
                            <View key={i}style={{flex:1}}>
                        <Text  style={{fontSize:20,textAlign:'center'}}>{player}</Text>
                        </View>
                        )
                      }
                        
                    }
                
            })
             
           }
        </View>
        <View style={{flexDirection:'row',flex:1}}> 
            {this.state.tab.map((sc , i)=>{
                 if(i+1 !==  this.state.players.length){
                return(
                    <View key={i} style={{borderRightColor:'#7f8c8d',
                    borderRightWidth:3,flex:1}}>
                    <Text  style={styles.plys}>{sc.name}</Text>
                    
                    <View >{sc.score.map((scor, ii) =>{
                       
                        
                        return(
                            <View key={ii}>
                           
                            <Text style={{fontSize:20,textAlign:'center'}}>{scor}</Text>
                                </View>
                            
                        )
                        
                    })}</View>
                    <Text style={{color:'red',fontSize:25,textAlign:'center'}}>{sc.total}</Text>
                    </View>
                )}else{
                    return(
                        <View key={i} style={{flex:1}}>
                        <Text  style={styles.plys}>{sc.name}</Text>
                        
                        <View >{sc.score.map((scor, ii) =>{
                           
                            
                            return(
                                <View key={ii}>
                               
                                <Text style={{fontSize:20,textAlign:'center'}}>{scor}</Text>
                                    </View>
                                
                            )
                            
                        })}</View>
                        <Text style={{color:'red',fontSize:25,textAlign:'center'}}>{sc.total}</Text>
                        </View>
                    )
                }
            })}
        </View>
        <View style={styles.strbtn} >
        
       
        
        <Button title='Add Scores'   onPress={()=>{this.props.navigation.navigate('Addscore')}} /></View>
        
        
    </View></ScrollView>
    
    
)
}



}

const styles = StyleSheet.create({
head:{
    fontSize:30,
    color:'black',
    textAlign:'center',
    marginTop:30
    
},

plys:{
    fontSize:20,
    textAlign:'center'
    
    

},
newbox:{
    display:'flex'
},
strbtn:{
  marginTop:30
    
}

});

export default withNavigationFocus(Live);