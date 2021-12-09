import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import colors from "../misc/colors";
import RoundIconBtn from "./RoundIconBtn";

const foramtDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

export default function NoteDetail(props) {
  const { note } = props.route.params;

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.time}>{`Created At ${foramtDate(note.time)}`}</Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.desc}>{note.desc}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <RoundIconBtn
          antIconName="delete"
          style={{ backgroundColor: colors.ERROR, marginBottom: 15 }}
          onPress={() => console.log("hapus catatan")}
        />
        <RoundIconBtn
          antIconName="edit"
          onPress={() => console.log("sunting catatan")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontWeight: "bold",
  },
  desc: { fontSize: 20, opacity: 0.6 },
  time: {
    textAlign: "right",
    fontSize: 12,
    opacity: 0.5,
  },
  btnContainer: {
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});
