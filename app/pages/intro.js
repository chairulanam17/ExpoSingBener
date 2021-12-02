import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Intro() {
  return (
    <View>
      <Text>Enter Your Name to Continue</Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
