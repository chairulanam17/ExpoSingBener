import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../misc/colors";

export default function Note({ item }) {
  const { title, desc } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text numberOfLines={3}>{desc}</Text>
    </View>
  );
}
const lebar = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    width: lebar / 2 - 10,
    padding: 8,
    borderRadius: 10,
  },
  title: { fontWeight: "bold", fontSize: 16, color: colors.LIGHT },
});
