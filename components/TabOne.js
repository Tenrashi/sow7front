import React from "react";
import { StyleSheet, View, Button, Alert, Text, Image, TextInput } from "react-native";

export default class TabOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Welcome!"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Let's begin with sow7! </Text>
        <Image
          style={{ width: 250, height: 250 }}
          source={{
            uri: "https://media.giphy.com/media/Le9kQc8VXjNdu/giphy.gif"
          }}
        />
        <TextInput
          style={{
            height: 40,
            width : 200,
          }}
          placeholder = "Email"
        /> 
        <Button
          style={{
            marginBottom : 10,
          }}
          title="OK"
        />
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
