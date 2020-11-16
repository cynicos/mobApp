import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [result, setResult] = useState("");
    const handleClick = () => {
        setResult(num1 / (((num2 / 12 / 100) * num3)+1));

    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="საბოლოო თანხა"
                style={styles.input}
                onChangeText={text => setNum1(parseFloat(text))}
            // value={num1}
            />
            <TextInput
                placeholder="წლიური საპროცენტო განაკვეთი"
                style={styles.input}
                onChangeText={text => setNum2(parseFloat(text))}
            // value={num2}
            />
            <TextInput
                placeholder="თანხის განთავსების პერიოდი (თვე)"
                style={styles.input}
                onChangeText={text => setNum3(parseFloat(text))}
            // value={num3}
            />
            <Button
                onPress={handleClick}
                title="დათვლა"
                color="#841584"
            />
            <Text>
                {result}
            </Text>

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
    input: {
        width: 300,
        height: 40,
        marginBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,

    }
});
