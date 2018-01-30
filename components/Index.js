import React, { Component } from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";

export default class App extends React.Component {
    
    constructor(){
       super();
        this.state={
            chaussette:[],
        };
    }
  
    handleClick() {
    Alert.alert("Hello !");
  }
  componentDidMount(){
    fetch('http://3f78c221.ngrok.io/sow7/web/app_dev.php/user')
    .then(results =>{
        return results.json();
    }).then(data =>{
    let chaussette = data.results.map((pic) => {
        return(
            <div key={pic.picture}>
                <img src={pic.picture} />
            </div>
        )
    })
    this.setState({chaussette: picture})
})
}
  render() {

    return (
      <View style={styles.container}>
        <div>
            <div>
                {this.state.chaussette}
            </div>
        </div>
        <Text> Click on the button : </Text>
        <Button onPress={this.handleClick.bind(this)} title="Go" />
      </View>
    );
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
