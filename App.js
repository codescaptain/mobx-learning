import { StatusBar } from "expo-status-bar";
import { Provider } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./src/components/Counter";
import store from "./src/store/index";

export default function App() {
  return (
    //counterstore
    <Provider {...store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
