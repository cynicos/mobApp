import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import TaskOne from "./TaskOne"
import TaskTwo from "./TaskTwo"

export default function App() {
    const [action, setAction] = useState("");
    const handleClick = act => {
            setAction(act);
    }
    return (
        <View style={styles.container}>
        <TouchableHighlight onPress={()=>handleClick("taskOne")} underlayColor="white">
            <View style={styles.button}>
                <Text style={styles.buttonText}>დაითვალე გასატანი თანხა</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>handleClick("taskTwo")} underlayColor="white">
            <View style={styles.button}>
                <Text style={styles.buttonText}>დაითვალე შესატანი თანხა</Text>
            </View>
        </TouchableHighlight>
        {action == "taskOne" &&
            (<TaskOne></TaskOne>)
        }
        {action == "taskTwo" &&
            (<TaskTwo></TaskTwo>)
        }
        <StatusBar style="auto" />
        </View>
    );


    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    input: {
        width: 300,
        height: 40,
        marginBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,

    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      },
});