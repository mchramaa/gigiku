import { View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/Tabs";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./app/Profile";

const Stack = createStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={{ flex: 1 }}>
        <NavigationContainer style={styles.NavCon}>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  NavCon: {
    backgroundColor: "blue",
  },
});
