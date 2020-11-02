import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [name, setName] = useState("შაქრო");

  const handleClick= () => {
    setName("ზაქრო")
  }



  return (
    <View style={styles.container}>
      <View style={styles.body}><Text style={styles.textStyle}>{name}</Text></View>
      
      <TouchableHighlight onPress={handleClick} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>დამაკლიკე</Text>
          </View>
        </TouchableHighlight>
      <StatusBar style="auto" />
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
  body: {
    backgroundColor: '#808080',
    padding: 30,
    margin: 20,
    width: '100%'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  header: {
    backgroundColor: '#808080',
    padding: 30,
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
  }
});
