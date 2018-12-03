import React from 'react';
import { View,Text,TextInput, StyleSheet,Button, AsyncStorage, Alert,Image,BackAndroid,BackHandler } from 'react-native';
import { withNavigationFocus } from 'react-navigation';



class HomeScreen extends React.Component {
    state={
      tab:[]
    }
    static navigationOptions = {
      header: null
    }
    componentDidMount(){

      BackHandler.addEventListener('hardwareBackPress', ()=> {
        Alert.alert('Confirm Exit','',[
          {text:'Cancel',onPress:()=> this.props.navigation.navigate('Home')},
          {text:'Exit',onPress:()=> BackAndroid.exitApp()}
          
        ]
         
        );
        return true;
    })
    }
    nyplay =()=>{
      if(this.state.tab.length !== 0){
        Alert.alert('Confirm to start newplay','Last game scores will lose.',[
          {text:'Cancel',onPress:()=>this.props.navigation.navigate('Home'),style:'cancel'},
          {text:'Conform',onPress:()=>this.props.navigation.navigate('Addply')}
        ]);
      }else{
        this.props.navigation.navigate('Addply')
      }
      
    }
    exit=()=>{
      Alert.alert('Confirm Exit','',[
        {text:'Cancel',onPress:()=> this.props.navigation.navigate('Home')},
        {text:'Exit',onPress:()=> BackAndroid.exitApp()}
        
      ]
       
      );}
     
    
    
    render (){
      if(this.props.isFocused){
        AsyncStorage.getItem('tabl').then(data =>{
          if(data !== null){
      
              this.setState({tab:JSON.parse(data)});
            
          }});
      }
      let btn;
      if(this.state.tab.length !== 0){
        btn = <View style={Styles.ccc}><Button  title='Continue Last Play' onPress={()=>{this.props.navigation.navigate('Live')}} /></View>
      }
      
    return(
      <View style={{flex:1,backgroundColor:'#ecf0f1'}}>
        <Text style={Styles.bbb}>Scores</Text>
        <View style={{flex:1,alignItems:'center'}}>
        <View style={Styles.ccc}><Button  title='New Play' onPress={this.nyplay} /></View>
        
        {btn}
        <View style={Styles.ccc}><Button  title='Exit' onPress={this.exit} /></View>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
        <Image
        style={Styles.img}
        source={require('./scrobg.png')}
        /></View>
       
      </View>
    );}}

    export default withNavigationFocus(HomeScreen)


    const Styles = StyleSheet.create({
        bbb:{
          marginTop:70,
          fontSize:30,
          textAlign:'center',
          marginBottom:20
        },
        ccc:{
          
          marginTop:30,
          width:200,
          
          
          
        },
        img:{
            marginTop:5,
            
            width:250,
            height:150
        }
        
        })
        