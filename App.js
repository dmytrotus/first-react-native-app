import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[state, setState] = useState([]);

  useEffect(() => {
    setState([1,2,3,4]);
  }, [])

  console.log(state);

  return (
    <View style={styles.container}>
      <Text>My first App!</Text>
      {state.map(el => 
        <Text key={el}>My first App! number {el}</Text>
      )}
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
});
