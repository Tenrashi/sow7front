import React, { Component } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";

export default class Inscription extends React.Component {
    render() {
        return (
            <View style={styles.login}>
               <TextInput
               style={{height : 40}}
               placeholder = "Nom"
               /> 
                 <TextInput
               style={{height : 40}}
               placeholder = "Prénom"
               /> 
                <Button 
                title="Button"
                />
            </View>
    );
    }
}

const styles = StyleSheet.create({
    login: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    });