import React from "react";
import { View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";

export const Offline = () => {
  const isConnected = useIsConnected();

  return (
    <View>
      <Text>{isConnected ? <Text></Text> : <Text></Text>}</Text>
    </View>
  );
};
