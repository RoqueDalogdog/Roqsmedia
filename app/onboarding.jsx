import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.header}>Welcome to</Text>
  <Image
  source={require('../assets/images/logo.png')}
  style={styles.logo}
  />
      <Link href="/Login" style={styles.link1}>Login</Link>
      <Link href="/Signup" style={styles.link2}>Signup</Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38A3A5', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: '#000', 
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',  
    backgroundColor: '#77E4C8',
    marginBottom: 10,
   
  },
  link1: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',  
    backgroundColor: '#80ED99',
    marginTop: 69,
    width: 150,
    color: 'white',
  },
  link2: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',  
    backgroundColor: '#80ED99',
    margin: 20,
    width: 150,
    color: 'white',
  },
logo:{
  width: 350,
  height: 100,
  marginBottom: 10,
}
});


