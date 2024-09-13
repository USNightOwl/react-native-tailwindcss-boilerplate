import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  copyright: {
    fontSize: 12,
    color: "#0AB4B4",
  },
});

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text className="text-xl">React Native Boilerplate</Text>
      <Text style={styles.copyright}>by nxhawk</Text>
    </View>
  );
}

registerRootComponent(App);
