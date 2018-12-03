



import Addply from './components/addplyr';
import Live from './components/live';
import Addscore from './components/addscore';
import HomeScreen from './components/home';
import{ createStackNavigator, createAppContainer} from 'react-navigation';



 


const Appnv = createStackNavigator({
  Home: HomeScreen,

  Addply:Addply,
  Live:Live,
  Addscore:Addscore
  
}); 
export default createAppContainer(Appnv)



