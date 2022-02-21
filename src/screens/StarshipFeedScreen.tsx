import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, ScrollView, Image } from "react-native";
import Data from "../../api/data.json";

const Card = ({ shipData }) => (
    <ScrollView style={styles.item}>
      <Text style={styles.model}>{shipData.model}</Text>
      <Text style={styles.model}>{shipData.manufacturer}</Text>
      <Text style={styles.model}>{shipData.hyperdrive_rating}</Text>
      <Image style={styles.tinyLogo} source={require('../../assets/starships/deathstar.jpg')}/>
    </ScrollView>
);  

export const StarshipFeedScreen = () => {

    const renderItem = ({ item }) => { 
        return (
        <Card shipData={item} />
    )};

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList 
            data = {Data.results}
            renderItem={renderItem}
            keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  model: {
      color:'black'
  }
});