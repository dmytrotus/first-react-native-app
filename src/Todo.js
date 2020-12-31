import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export const Todo = (props) => {
    const todo = props.todo;
    return(
        <TouchableOpacity key={todo.id}
        onLongPress={() => props.removeTodo(todo.id)}>
        <View style={styles.block}>
            <Text key={todo.id}>{todo.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: "row",
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        margin: 2
    }
})