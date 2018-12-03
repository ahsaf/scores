import React from 'react';
import { View,Text,TextInput, StyleSheet,Button, AsyncStorage,ScrollView } from 'react-native';



export default class Addscore extends React.Component {
state={
 tab:[],
 
 msg:[],
 mass:''

}
click =()=>{
    
    this.state.tab.map((it,i) =>{
        if(it.latest === ''){
            const msgg = this.state.msg.push(i)
            this.setState({msgg})
          
        }
       
    });
    
     
     
    if(this.state.msg.length === 0){
        this.state.tab.map((it,i) =>{
        const yy = it.total= Number(it.total) + Number(it.latest);
        const mm =  it.score.push(it.latest);
        const ll = it.latest = '';
        const gg = it.bc = '#3498';
        this.setState({mm, yy, ll,gg})

        })


        AsyncStorage.setItem('tabl',JSON.stringify(this.state.tab));
        this.props.navigation.navigate('Live');
        this.forceUpdate()
     
    }else{
        this.setState({mass:'Fill the fields.',msg:[]});

    }
   

    
}
componentDidMount(){
 
 
    AsyncStorage.getItem('tabl').then(dta =>{
        if(dta !== null){
            const jj = JSON.parse(dta)
            
          jj.map(u =>{
              const n = this.state.tab.push(u)
              this.setState({n});
          })
          
          
        }else{
            AsyncStorage.getItem('livep').then(data =>{
                if(data !== null){
                    const jjj = JSON.parse(data)
                    
                  jjj.map(uu =>{
                      const nn = this.state.tab.push({name:uu,score:[],latest:'',total:'',bc:'#3498db'})
                      this.setState({nn});
                  })
                  
                  
                }})
        }})


    
     
}
onchange = () =>{
 const stt = [...this.state, this.state.tab[i].latest]
}
static navigationOptions = {
    header: null
  }

    
render (){
    
return(
    <ScrollView style={{backgroundColor:'#ecf0f1'}}>
    <View>
        <Text style={styles.head}>Add Score</Text>
        
        <View style={{marginLeft:10}}>
            {this.state.tab.map((player, i) =>{
                
          
            
                        return(
                            <View style={styles.newbox}key={i} >
                        <Text  style={styles.plys}>{i+1}: {player.name}:</Text>
                        <TextInput keyboardType='numeric' style={{
                                width:140,
                                borderColor:player.bc,
                                borderWidth:2,
                                backgroundColor:'#ecf0f1',
                                marginBottom:10,
                                marginTop:5,
                                fontSize:25,
                                position:'absolute',
                                right:10,
                                paddingLeft:5
                        }} onFocus={() => {this.state.tab[i].bc='#2ecc71';
                            this.forceUpdate()}} onBlur={() => {this.state.tab[i].bc='#3498db';
                                this.forceUpdate()}} placeholder='Enter Score' onChangeText={(text) => {this.state.tab[i].latest=text;
                             this.forceUpdate()}} value={player.latest} />
                        
                        
                        </View>
                        )
            
                
                        })}
        </View>
       
        
       <View>
       <Text style={{color:'red',fontSize:20}}>{this.state.mass}</Text>
        <Button title='Save' onPress={this.click} /></View>
        
        
    </View></ScrollView>
)
}



}

const styles = StyleSheet.create({
head:{
    fontSize:30,
    color:'black',
    textAlign:'center',
    marginTop:20,
    marginBottom:30
    
},

plys:{
    fontSize:25

},
newbox:{
    flexDirection:'row',
    marginBottom:20

    
}

});