import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";

export default class index extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Choose your socks",
  };
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  handleClick() {
    Alert.alert("plup !");
  }
  componentDidMount() {
    fetch("http://cdbf16f9.ngrok.io/sow7/web/app_dev.php/api/users")
      .then(result => {
        console.log("second", result._bodyText);
        this.setState({
          isLoaded: true,
          items: JSON.parse(result._bodyText)
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }
  render() {
    console.log("third", this.state.items);
    if (this.state.isLoaded) {
      return (
        <View style={styles.container}>
          <Text> Click on the plop : </Text>
          <Button onPress={this.handleClick.bind(this)} title="Go" />
          {this.state.items.map((item, index) => (
            <View key={index}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "20%"
  }
});
