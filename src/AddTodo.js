import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = (props) => {
    const[value, setValue] = useState('');

    const handlePress = () => {
        if(value.trim())
        {
            props.addTodo({title:value});
            setValue('');
        } else {
            Alert.alert('Не может быть пустым')
        }
        
    }
    return(
        <View style={styles.block}>
            <TextInput style={styles.input}
            placeholder="Введите название дела"
            value={value}
            onChangeText={setValue} />
            <Button title="Добавить" onPress={handlePress} />
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab"
    }
})