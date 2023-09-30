import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/Tabs";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
});
