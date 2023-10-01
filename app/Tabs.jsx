import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Home from "./Home";
import Panduan from "./Panduan";
import Alarm from "./Alarm";
import { Text, View, Platform, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const btnList = [
    {
      id: "Panduan",
      component: Panduan,
      // icon: (
      //   <MaterialCommunityIcons name="tooth-outline" size={30} color="black" />
      // ),
    },
    {
      id: "Home",
      component: Home,
      // icon: <AntDesign name="home" size={30} />,
    },
    {
      id: "Alarm",
      component: Alarm,
      // icon: <MaterialIcons name="access-alarm" size={25} />,
    },
  ];

  let TabHeight;
  if (Platform.OS === "ios") {
    TabHeight = 90;
  } else if (Platform.OS === "android") {
    TabHeight = 60;
  }

  let FontTabBar;
  if (Platform.OS === "ios") {
    marginBottom = 10;
  } else if (Platform.OS === "android") {
    marginBottom = 500;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarLabel: ({ focused }) => (focused ? true : false),

        tabBarStyle: {
          shadowOpacity: 0.35,
          shadowOffset: { width: 0, height: -2 },
          shadowColor: "#000000",
          shadowRadius: 5,
          height: TabHeight,
        },
      }}
    >
      <Tab.Group>
        {btnList.map((data, index) => (
          <Tab.Screen
            key={index}
            name={data.id}
            component={data.component}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <View
                      style={
                        focused
                          ? {
                              backgroundColor: "#00B4D8",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 60,
                              height: 60,
                              borderRadius: 100,
                              borderWidth: 4,
                              elevation: 0.51,
                              borderColor: "white",
                              shadowRadius: 3.84,
                              shadowOpacity: 0.3,
                            }
                          : {}
                      }
                    >
                      {data.icon}
                    </View>
                    <Text
                      style={
                        focused ? { marginBottom: 25 } : { display: "none" }
                      }
                    >
                      {data.id}
                    </Text>
                  </View>
                );
              },
            }}
          />
        ))}
      </Tab.Group>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  FontTabBar: {},
});
