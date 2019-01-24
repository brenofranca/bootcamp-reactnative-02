import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const bgColor = "#F5FCFF";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: "center"
  }
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>First Project</Text>
  </View>
);

export default App;
