import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Routes } from "../Navigation/Routes";

export const StarshipCard = ({ shipData }) => {
  const navigation = useNavigation<any>();

  /* function navigateToStarshipDetailScreen() {
    navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN);
  } */

  return (
    <View style={styles.item}>
      <Text style={styles.model_name}>{shipData.model}</Text>
      {/* <Image
            style={styles.tinyLogo}
            source={require("../../assets/starships/CR90corvette.jpg")}
          /> */}
      <Text style={styles.model}>{shipData.manufacturer}</Text>
      <Text style={styles.model}>{shipData.hyperdrive_rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //safeContainer: {},
  //container: {},
  /*tinyLogo: {
    width: "60%",
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 2,
  },*/
  item: {
    backgroundColor: "rgba(45,105,220, 0.18)",
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 10,
    borderRadius: 1,
    marginTop: 30,
    borderWidth: 3,
    borderColor: "#2D69DC",
    marginLeft: 40,
    marginRight: 40,
  },
  model_name: {
    color: "#2D69DC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "#2D69DC",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
  model: {
    color: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
