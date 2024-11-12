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
      <Link href="/onboarding" style={styles.link3}>Go to Home</Link>
      
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
    marginBottom: 20
   
  },
 
  link3: {
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 1,
    marginTop: 300,
    borderColor: '#000', 
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',  
    backgroundColor: '#80ED99',
    width: 250,
  },
logo:{
  width: 350,
  height: 100,
  marginBottom: 10,
}
});


