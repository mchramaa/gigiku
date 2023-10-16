import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "./app/hooks/useAuth.zustand";
import { useFonts } from "expo-font";
import * as SQLite from "expo-sqlite";
import Tabs from "./app/Tabs";
import Profile from "./app/Profile";
import SetNewName from "./app/components/SetFirstName";
import VideoEdukasi from "./app/VideoEdukasi";
import PanduanFromNotif from "./app/PanduanFromNotif";

const Stack = createStackNavigator();
const App = () => {
  const { user, setUser } = useAuth();
  const [isUserSet, setIsUserSet] = useState(false);
  const [isAlarmTable, setIsAlarmTable] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const db = SQLite.openDatabase("gigiku.db");
  function initDatabase() {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL);",
        [],
        () => console.log("Users Table created successfully"),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS alarms (id INTEGER PRIMARY KEY AUTOINCREMENT, tag VARCHAR(255) NOT NULL, hours VARCHAR(255) NOT NULL, minute VARCHAR(255) NOT NULL);",
        [],
        () => setIsAlarmTable(true),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
        }
      );

      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at VARCHAR(255) NOT NULL);",
        [],
        () => console.log("Reports Table created successfully"),
        (error) => {
          if (error) {
            console.error("Error creating table: ", error);
          }
        }
      );
    });
  }

  function getDefaultAlarm() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM alarms",
          [],
          (_, { rows }) => {
            const alarmRows = rows._array;
            resolve(alarmRows);
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  }

  function createDefaultAlarm() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO alarms (tag, hours, minute) values (?, ?, ?)`,
          ["Sikat Gigi Pagi", "21", "04"],
          (_, { insertId, rowsAffected }) => {
            resolve({ insertId: insertId, rowsAffected: rowsAffected });
          },
          (error) => {
            reject(error);
          }
        );
        tx.executeSql(
          `INSERT INTO alarms (tag, hours, minute) values (?, ?, ?)`,
          ["Sikat Gigi Malam", "21", "05"],
          (_, { insertId, rowsAffected }) => {
            resolve({ insertId: insertId, rowsAffected: rowsAffected });
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  }

  function getUserData() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM users",
          [],
          (_, { rows }) => {
            const userRows = rows._array;
            resolve(userRows);
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  }

  const emptyTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM alarms",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
        }
      );
      tx.executeSql(
        "DELETE FROM users",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
        }
      );
      tx.executeSql(
        "DELETE FROM reports",
        [],
        (_, result) => {
          console.log("Table emptied successfully");
        },
        (error) => {
          console.error("Error while emptying the table:", error);
        }
      );
    });
  };

  async function initAlarmDefault() {
    const defaultAlarm = await getDefaultAlarm();
    if (defaultAlarm.length == 0) {
      createDefaultAlarm();
    }
  }

  useEffect(() => {
    getUserData()
      .then((userRows) => {
        if (userRows.length > 0) {
          setUser({ id: userRows[0].id, name: userRows[0].name });
          setIsUserSet(true);
        }
        setIsUserSet(true);
      })
      .catch((error) => {
        console.error(error);
      });

    initDatabase();
  }, []);

  if (isAlarmTable) {
    initAlarmDefault();
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={{ flex: 1 }}>
        <NavigationContainer style={styles.NavCon}>
          <Stack.Navigator
            initialRouteName={`${user.name != "" ? "Tabs" : "SetNewName"}`}
          >
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false, title: "Home" }}
            />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen
              name="SetNewName"
              component={SetNewName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VideoEdukasi"
              component={VideoEdukasi}
              options={{ title: "Video Edukasi" }}
            />
            <Stack.Screen
              name="PanduanFromNotif"
              component={PanduanFromNotif}
              options={{ title: "Panduan Sikat Gigi" }}
            />
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
    fontFamily: "Poppins-Regular",
  },
  NavCon: {
    backgroundColor: "blue",
  },
});
