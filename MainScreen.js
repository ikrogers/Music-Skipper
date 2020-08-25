import React, { Component } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import CupertinoButtonPurple from "./assets/components/CupertinoButtonPurple";
import CupertinoButtonWarning from "./assets/components/CupertinoButtonWarning";
import CupertinoButtonSuccess from "./assets/components/CupertinoButtonSuccess";
import CupertinoButtonDanger from "./assets/components/CupertinoButtonDanger";
import CupertinoButtonPurple1 from "./assets/components/CupertinoButtonPurple1";
import CupertinoButtonWarning1 from "./assets/components/CupertinoButtonWarning1";
import CupertinoButtonWarning2 from "./assets/components/CupertinoButtonWarning2";
import Constants from "expo-constants";

function MainScreen(props) {
  const showToastWithGravity = () => {
    alert("You tapped the button!");
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cupertinoButtonPurpleColumnRow}>
        <View style={styles.cupertinoButtonPurpleColumn}>
          <CupertinoButtonPurple
            style={styles.cupertinoButtonPurple}
            onPress={showToastWithGravity}
          ></CupertinoButtonPurple>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
        </View>
        <View style={styles.cupertinoButtonSuccessColumn}>
          <CupertinoButtonSuccess
            style={styles.cupertinoButtonSuccess}
          ></CupertinoButtonSuccess>
          <CupertinoButtonDanger
            style={styles.cupertinoButtonDanger}
            onPress={showToastWithGravity}
          ></CupertinoButtonDanger>
        </View>
        <View style={styles.cupertinoButtonPurple1Column}>
          <CupertinoButtonPurple1
            style={styles.cupertinoButtonPurple1}
          ></CupertinoButtonPurple1>
          <View style={styles.cupertinoButtonWarning1Row}>
            <CupertinoButtonWarning1
              style={styles.cupertinoButtonWarning1}
            ></CupertinoButtonWarning1>
            <CupertinoButtonWarning2
              style={styles.cupertinoButtonWarning2}
            ></CupertinoButtonWarning2>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cupertinoButtonPurple: {
    height: 230,
    width: 320,
  },
  cupertinoButtonWarning: {
    height: 105,
    width: 320,
    backgroundColor: "rgba(16,14,16,1)",
    marginTop: 1,
  },
  cupertinoButtonPurpleColumn: {
    width: 320,
  },
  cupertinoButtonSuccess: {
    height: 156,
    width: 100,
  },
  cupertinoButtonDanger: {
    height: 180,
    width: 100,
  },
  cupertinoButtonSuccessColumn: {
    width: 100,
  },
  cupertinoButtonPurple1: {
    height: 230,
    width: 320,
    borderWidth: 1,
    borderColor: "#000000",
  },
  cupertinoButtonWarning1: {
    height: 105,
    width: 160,
  },
  cupertinoButtonWarning2: {
    height: 105,
    width: 160,
  },
  cupertinoButtonWarning1Row: {
    height: 105,
    flexDirection: "row",
    marginTop: 1,
  },
  cupertinoButtonPurple1Column: {
    width: 320,
  },
  cupertinoButtonPurpleColumnRow: {
    height: 336,
    flexDirection: "row",
    marginTop: 24,
  },
});

export default MainScreen;
