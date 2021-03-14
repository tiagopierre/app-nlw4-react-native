import React from "react";

import { StyleSheet, View } from "react-native";
import { Home } from "./src/pages/Home";

import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 20,
  },
});
