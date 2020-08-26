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
import AudioControl from "./AudioControl";

function MainScreen(props) {
  const sendPlayCommand = () => {
    AudioControl.sendCommand("togglepause");

    ToastAndroid.showWithGravity(
      "command Sent",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const sendNextCommand = () => {
    AudioControl.sendCommand("next");

    ToastAndroid.showWithGravity(
      "command Sent",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const sendPreviousCommand = () => {
    AudioControl.sendCommand("previous");

    ToastAndroid.showWithGravity(
      "command Sent",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const sendStopCommand = () => {
    AudioControl.sendCommand("stop");

    ToastAndroid.showWithGravity(
      "command Sent",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const sendPauseCommand = () => {
    AudioControl.sendCommand("pause");

    ToastAndroid.showWithGravity(
      "command Sent",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  const sendQuitCommand = () => {
    //AudioControl.sendCommand("play");

    ToastAndroid.showWithGravity(
      "command Sent",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cupertinoButtonPurpleRow}>
        <CupertinoButtonPurple
          style={styles.cupertinoButtonPurple}
          onPress={sendPreviousCommand}
        ></CupertinoButtonPurple>
        <CupertinoButtonPurple1
          style={styles.cupertinoButtonPurple1}
          onPress={sendNextCommand}
        ></CupertinoButtonPurple1>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  cupertinoButtonPurple: {
    height: 336,
    width: 370,
  },
  cupertinoButtonPurple1: {
    height: 336,
    width: 370,
    borderWidth: 1,
    borderColor: "#000000",
  },
  cupertinoButtonPurpleRow: {
    height: 336,
    flexDirection: "row",
    flex: 1,
    marginTop: 24,
  },
});

export default MainScreen;
