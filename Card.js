import { StyleSheet, Text, Image, View ,Icon} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';


export default function Card(props){
    return (
      <View style={styles.container}>
        
  
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text>{props.text}</Text>          
          <FontAwesomeIcon icon={ faFire }/>
          <Text>${props.price}</Text>        
        </View>

        <Image style={{width: 100, height: 100}} source={{
          uri: props.image,
        }} />
        
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color: '#121A2C',
      fontSize: 32,
      fontWeight: 700
    }
  
  });
  