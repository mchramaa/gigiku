import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Home from "./Home";
import Panduan from "./Panduan";
import Alarm from "./Alarm";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const btnList = [
    {
      id: "Panduan",
      component: Panduan,
      icon: (
        <MaterialCommunityIcons name="tooth-outline" size={30} color="black" />
      ),
    },
    {
      id: "Home",
      component: Home,
      icon: <AntDesign name="home" size={30} />,
    },
    {
      id: "Alarm",
      component: Alarm,
      icon: <MaterialIcons name="access-alarm" size={25} />,
    },
  ];
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Group>
        {btnList.map((data, index) => (
          <Tab.Screen key={index} name={data.id} component={data.component} />
        ))}
      </Tab.Group>
    </Tab.Navigator>
  );
}
