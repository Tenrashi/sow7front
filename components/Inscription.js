import React, { Component } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

export default class Inscription extends React.Component {
    render() {
        return (
            <View style={styles.inscription}>
               <TextInput
               style={{height : 40}}
               placeholder = "Email"
               /> 
                <Button 
                title="Button"
                />
            </View>
    );
    }
}

const styles = StyleSheet.create({
    inscription: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    });