import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../misc/colors";

export default function SearchBar({ containerStyle }) {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput style={styles.searchBar} placeholder="Search here ..." />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 25,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {},
});
