import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NoteDetail(props) {
  const { note } = props.route.params;
  return (
    <View>
      <Text>{note.title}</Text>
      <Text>{note.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
