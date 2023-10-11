import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import TabSetName from "./TabSetName";
import LotHello from "../../assets/lottie/Hello";

export default function SetFirstName() {
  const saveNameBTN = () => {
    updateUser(name);
  };

  function handleInputName(value) {
    setName(value);
  }
  return (
    <LinearGradient colors={["#90e0ef", "#1AA7EC"]}>
      <View style={{ height: "100%" }}>
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              elevation: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 40,
                fontSize: 30,
                color: "white",
                fontWeight: "bold",
                elevation: 1,
              }}
            >
              Selamat Datang
            </Text>
            <LotHello />
            <View
              style={{
                height: 200,
                width: "100%",
                backgroundColor: "white",
                borderRadius: 15,
                padding: 30,
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "grey", marginBottom: 5 }}
              >
                Silahkan Masukkan Nama Kamu
              </Text>
              <TabSetName
                buttonName="Simpan"
                handleInputName={handleInputName}
                onPress={saveNameBTN}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
