import React from "react";
import { StyleSheet, View, Button, Alert, Text, Image } from "react-native";

export default class TabOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Welcome!"
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          source={{
            uri: "https://media.giphy.com/media/Le9kQc8VXjNdu/giphy.gif"
          }}
        />
        <Text style={styles.Text}> Let's begin with sow7! </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
