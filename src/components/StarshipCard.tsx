import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, ScrollView, Image } from "react-native";


export const StarshipCard = ({ shipData } : any) => (
    <View style={styles.item}>
      <Text style={styles.model}>{shipData.model}</Text>
      <Image style={styles.tinyLogo} source={require('../../assets/starships/deathstar.jpg')}/>
      <Text style={styles.manufacturer}>{shipData.manufacturer}</Text>
      <Text style={styles.hyperdrive_rating}>{shipData.hyperdrive_rating}</Text>
    </View>
);  

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
