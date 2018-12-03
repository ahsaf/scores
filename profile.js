import React from 'react';
import { View,Text,TextInput, StyleSheet,Button } from 'react-native';


export default class Profilescreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:{
                name:'ahsaf',
                username:'',
                password:'',
                username1:'',
                password1:''
            }
        }
        this.press = this.press.bind(this);
    }
    press = () =>{
        this.setState({user:{username1:this.state.user.username,password1:this.state.user.password}})

    }
    static navigationOption = {
        title:'Welcome'
    };

    
render (){
    const { navigate } = this.props.navigation;
return(
    <View>
        <Text style={styles.head}>Login</Text>
        <Text>User name</Text>
        <TextInput style={styles.textin} onChangeText={(text) => {this.setState({user:{username:text}})}} />
        <Text>Password</Text>
        <TextInput style={styles.textin} onChangeText={(text) => {this.setState({user:{password:text}})}} />
        <Button
        title='Login'
        onPress={this.press.bind(this)}
        />
        <View>
            <Text>{this.state.user.name}</Text>
            <Text>{this.state.user.username1}</Text>
            <Text>{this.state.user.passwoed1}</Text>
        </View>
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