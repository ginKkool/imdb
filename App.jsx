import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
          gap: 20,
        }}
      >
        <View style={styles.headerStyle} />
        <Image {styles.logoStyle}
          source={require("./assets/logo-imdb.png")}
          />

        <Text>TEST IMDB</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    height: 70,
    width: "100%",
    backgroundColor: "#393939",
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
});
