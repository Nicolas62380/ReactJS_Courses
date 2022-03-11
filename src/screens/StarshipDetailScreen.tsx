/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const StarshipDetailScreen = (props: {
  route: { params: { item: any } };
}) => {
  const { item } = props.route.params;
  const x = item.name;
  function imageMap(x: string) {
    switch (x) {
      case "CR90 corvette":
        return require("../../assets/starships/CR90corvette.jpg");
      case "Star Destroyer":
        return require("../../assets/starships/stardestroyer.jpg");
      case "Sentinel-class landing craft":
        return require("../../assets/starships/sentinel-classlandingcraft.jpg");
      case "Death Star":
        return require("../../assets/starships/deathstar.jpg");
      case "Millennium Falcon":
        return require("../../assets/starships/millenniumfalcon.jpg");
      case "Y-wing":
        return require("../../assets/starships/y-wing.jpg");
      case "X-wing":
        return require("../../assets/starships/x-wing.jpg");
      case "TIE Advanced x1":
        return require("../../assets/starships/tieadvancedx1.jpg");
      case "Executor":
        return require("../../assets/starships/executor.jpg");
      case "Rebel transport":
        return require("../../assets/starships/rebeltransport.jpg");

      default:
        break;
    }
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode={"cover"}
          source={require("../../assets/DetailsScreen.jpg")}
          style={styles.backgroundImage}
        >
          <Image style={styles.tinyLogo} source={imageMap(x)} />
          <Text style={styles.model}>{item.name}</Text>
          <Text style={styles.manufacturer}>{item.manufacturer}</Text>
          <Text style={styles.iconText}>
            ⭐ Rating :{item.hyperdrive_rating}/5.0
          </Text>
          <Text style={styles.iconText2}>
            🚀 Max Speed :{item.max_atmosphering_speed}
          </Text>
          <Text style={styles.simpleText}>👨‍🚀 Crew: {item.crew}</Text>
          <Text style={styles.simpleText}>
            💺 Passengers: {item.passengers}
          </Text>
          <Text style={styles.simpleText}>
            🍪 Consumables: {item.consumables}
          </Text>
          <Text style={styles.simpleText}>
            🧳 cargo_capacity: {item.cargo_capacity}
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {},
  tinyLogo: {
    width: "80%",
    height: 250,
    alignSelf: "center",
  },
  model: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 40,
    color: "#2D69DC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "#2D69DC",
  },
  manufacturer: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 40,
    color: "#2D69DC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "#2D69DC",
  },
  iconText: {
    color: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "white",
    fontSize: 25,
    textAlign: "left",
    marginLeft: 40,
    marginTop: 40,
  },
  iconText2: {
    color: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "white",
    fontSize: 25,
    textAlign: "left",
    marginLeft: 40,
    marginBottom: 40,
  },
  simpleText: {
    color: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "white",
    fontSize: 25,
    textAlign: "left",
    marginLeft: 40,
  },
  backgroundImage: {
    height: "100%",
  },
});
