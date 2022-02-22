import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, ScrollView, Image } from "react-native";
import Data from "../../api/data.json";
import { useStarships } from "../hooks/useStarships";
import { StarshipCard } from "../components/StarshipCard";



export const StarshipFeedScreen = () => {

    const { isLoading,isError,data } = useStarships();

    if (isLoading) {
      return <Text> Loading </Text>
    }
    if (isError) {
      return <Text> Error </Text>
    }

    const renderItem = ({ item }:any) => { 
        return (
        <StarshipCard shipData={item} />
    )};

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList 
          data = {data.results}
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
    backgroundColor:"#eff0f5"
  },
  tinyLogo: {
    width: '80%',
    height: 250,
    alignSelf:'center'
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: "auto",
  },
  model: {
      color:'black',
      fontSize:25,
      fontWeight:'bold',
      textAlign:'center'
  },
  manufacturer: {
    color:"black",
    fontSize:15,
    fontWeight:'normal'
  },
  hyperdrive_rating: {
    color:"black",
    fontSize: 15,
  }
});