import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonDanger(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress} //define additional proprty on press here to be used in MainScreen to run functions
    >
      <Text style={styles.caption}>Pause</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#fff",
    fontSize: 17,
  },
});

export default CupertinoButtonDanger;
