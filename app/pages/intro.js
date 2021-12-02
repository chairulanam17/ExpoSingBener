import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import RoundIconBtn from "../components/RoundIconBtn";
import colors from "../misc/colors";

export default function Intro() {
  const [user, setUser] = useState("");
  const handleOnChange = (text) => setUser(text);

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
        <TextInput
          value={user}
          onChangeText={handleOnChange}
          placeholder="Enter Name"
          style={styles.textInput}
        />
        {user.trim().length >= 3 ? (
          <RoundIconBtn antIconName="arrowright" />
        ) : null}
      </View>
    </>
  );
}

const width = Dimensions.get("window").width - 70;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 20,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: "flex-start",
    paddingLeft: 35,
    marginBottom: 5,
    opacity: 0.5,
  },
});
