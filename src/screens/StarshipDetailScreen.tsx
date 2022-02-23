import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useStarships } from "../hooks/useStarships";
import { StarshipCard } from "../components/StarshipCard";
import { Routes } from "../Navigation/Routes";

export const StarshipDetailScreen = ({ starshipName }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/starships/CR90corvette.jpg")}
        />
        <Text style={styles.model}>{starshipName}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: "80%",
    height: 250,
    alignSelf: "center",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: "auto",
  },
  model: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  manufacturer: {
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
  },
  hyperdrive_rating: {
    color: "black",
    fontSize: 15,
  },
});
