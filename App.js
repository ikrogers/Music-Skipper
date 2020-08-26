import { StatusBar } from "expo-status-bar";
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
import MainScreen from "./MainScreen";

export default function App() {
  return <MainScreen></MainScreen>;
}

const styles = StyleSheet.create({
  container: {},
});
