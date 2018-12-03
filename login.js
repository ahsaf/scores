import React from 'react';
import { View,Text,TextInput, StyleSheet,Button, AsyncStorage } from 'react-native';


export default class Login extends React.Component {
state={
    user:{
        username:'',
        password:''
    }
}
click =()=>{
    AsyncStorage.setItem('username', this.state.user.username);
    
}
    
render (){
    
return(
    <View>
        <Text style={styles.head}>Login</Text>
        <Text>User name</Text>
        <TextInput style={styles.textin} onChangeText={(text) => {this.setState({user:{username:text}})}} />
        <Text>Password</Text>
        <TextInput style={styles.textin} onChangeText={(text) => {this.setState({user:{password:text}})}} />
        <Button title='login' onPress={this.click} />
        <Button title='go to' onPress={()=>{this.props.navigation.navigate('Home')}} />
        
    </View>
)
}



}

const styles = StyleSheet.create({
head:{
    fontSize:20,
    color:'black'
},
textin:{
    width:300,
    borderBottomColor:'green',
    borderBottomWidth:3,
    backgroundColor:'#eee',
    marginBottom:10,
    marginTop:10
}
});