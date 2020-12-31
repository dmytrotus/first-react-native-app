import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { ScrollView, StyleSheet, Text, View, Modal } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const[todos, setTodos] = useState([]);
  const[modalVisible, setModalVisible] = useState(true);

  const addTodo = (todo) => {
    setTodos(prevState =>[
      {
        id: Date.now().toString(),
        title: todo.title
      },
      ...prevState
    ])
  }

  const removeTodo = (id) => {
    const Updated = todos.filter(el => el.id != id);
    setTodos(Updated);
  }

  return (
    <View>
      <Navbar title="Some Todo App" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <ScrollView>
        {todos.map(el => 
        <Todo todo={el} removeTodo={removeTodo} />
        )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});
