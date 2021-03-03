import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";

//from provider
const Counter = inject("CounterStore")(
  observer((props) => {
    const { CounterStore } = props;
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text> {CounterStore.count} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => CounterStore.increment()} title="Artır" />
          <Button onPress={() => CounterStore.dicrement()} title="Azalt" />
        </View>
      </View>
    );
  })
);
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
export default Counter;
