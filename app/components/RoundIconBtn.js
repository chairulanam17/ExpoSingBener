import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

export default function RoundIconBtn({ antIconName, size, color, style }) {
  return (
    <AntDesign
      style={[styles.icon, { ...style }]}
      name={antIconName}
      size={size || 24}
      color={color || colors.LIGHT}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
