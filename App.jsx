import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginTop:
              Platform.OS === "android" ? Constants.statusBarHeight : 0,
            gap: 20,
          }}
        >
          <View style={styles.headerStyle}>
            <Image
              style={styles.logoStyle}
              resizeMode="contain"
              source={require("./assets/imgs/logo-imdb.png")}
            />
          </View>

          <Text style={styles.titleStyle}>Pulp Fiction</Text>
          <Text style={styles.catchlineStyle}>1994 154mn Crime, Drama </Text>
          <View style={styles.containerFlex}>
            <Image
              source={require("./assets/imgs/pulp fiction.jpg")}
              style={styles.imageStyle}
              resizeMode="contain" // par défaut
            />
            <View>
              <Text style={styles.pitchStyle}>
                The lives of two mob hitmen, a boxer, a gangster and his wife,
                and a pair of diner bandits intertwine in four tales of violence
                and redemption.
              </Text>
              <Pressable style={styles.touchStyle}>
                <Text style={styles.touchTextStyle}>+ ADD TO WATCHLIST</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.containerFlex}>
            <View style={{ alignItems: "center" }}>
              <FontAwesome name="star" size={24} color="#e6b91e" />
              <Text style={styles.touchTextStyle}>8,8/10</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <FontAwesome name="star-o" size={24} color="white" />
              <Text style={styles.touchTextStyle}>RATE THIS</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={styles.greenSquare}>
                <Text style={styles.touchTextStyle}>95</Text>
              </View>
              <Text style={styles.touchTextStyle}>Metascore</Text>
            </View>
          </View>
          <View style={styles.containerFlex}>
            <Text style={styles.castTitleStyle}>Top Billed Cast</Text>
            <Text style={styles.blueTextStyle}> SEE ALL</Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.carouselContainer}
            >
              <View style={styles.actorsCard}>
                <Image
                  source={require("./assets/imgs/travolta.jpeg")}
                  style={styles.imageStyle}
                  resizeMode="contain" // par défaut
                />
                <Text style={styles.touchTextStyle}>John Travolta</Text>
                <Text style={styles.catchlineStyle}>Vincent Vega</Text>
              </View>
              <View style={styles.actorsCard}>
                <Image
                  source={require("./assets/imgs/jackson.jpeg")}
                  style={styles.imageStyle}
                  resizeMode="contain" // par défaut
                />
                <Text style={styles.touchTextStyle}>Samuel L. Jackson</Text>
                <Text style={styles.catchlineStyle}>Jules Winnfield</Text>
              </View>
              <View style={styles.actorsCard}>
                <Image
                  source={require("./assets/imgs/thurman.jpeg")}
                  style={styles.imageStyle}
                  resizeMode="contain" // par défaut
                />
                <Text style={styles.touchTextStyle}>Uma Thurman</Text>
                <Text style={styles.catchlineStyle}>Mia Wallace</Text>
              </View>
              <View style={styles.actorsCard}>
                <Image
                  source={require("./assets/imgs/willis.jpeg")}
                  style={styles.imageStyle}
                  resizeMode="contain" // par défaut
                />
                <Text style={styles.touchTextStyle}>Bruce Willis</Text>
                <Text style={styles.catchlineStyle}>Butch Coolidge</Text>
              </View>
              <View style={styles.actorsCard}>
                <Image
                  source={require("./assets/imgs/roth.jpeg")}
                  style={styles.imageStyle}
                  resizeMode="contain" // par défaut
                />
                <Text style={styles.touchTextStyle}>Tim Roth</Text>
                <Text style={styles.catchlineStyle}>Ringo</Text>
              </View>
              <View style={styles.actorsCard}>
                <Image
                  source={require("./assets/imgs/keitel.jpeg")}
                  style={styles.imageStyle}
                  resizeMode="contain" // par défaut
                />
                <Text style={styles.touchTextStyle}>Harvey Keitel</Text>
                <Text style={styles.catchlineStyle}>Winston Wolfe</Text>
              </View>
            </ScrollView>
            <View style={styles.credits}>
              <Text style={styles.touchTextStyle}>Director</Text>
              <Text style={styles.catchlineStyle}>Quentin Tarantino</Text>
            </View>
            <View style={styles.credits}>
              <Text style={styles.touchTextStyle}>Writers</Text>
              <Text style={styles.catchlineStyle}>Quentin Tarantino</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    boxSizing: 10,
  },
  headerStyle: {
    height: 70,
    width: "100%",
    backgroundColor: "#393939",
    justifyContent: "center",
  },
  logoStyle: {
    width: 150,
    height: 45,
  },
  titleStyle: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },
  catchlineStyle: {
    color: "#9f9f9f",
    fontSize: 15,
  },
  imageStyle: {
    // width: "100%",
    width: 150,
    height: 200,
  },
  pitchStyle: {
    color: "#ffffff",
    fontSize: 15,
    width: 200,
    paddingBottom: 30,
  },
  containerFlex: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    justifyContent: "space-around",
  },
  touchStyle: {
    width: 250,
    height: 30,
    backgroundColor: "#0277bd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  touchTextStyle: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  greenSquare: {
    width: 23,
    backgroundColor: "#62c750",
    alignItems: "center",
  },
  castTitleStyle: {
    color: "#ffffff",
    fontSize: 30,
  },
  blueTextStyle: {
    fontSize: 17,
    color: "#00a8f5",
    fontWeight: "bold",
  },
  actorsCard: {
    backgroundColor: "#2a2a2a",
  },
  carouselContainer: {
    gap: 10,
  },
  credits: {
    paddingTop: 30,
  },
});
