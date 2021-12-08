import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Intro from "./app/pages/intro";
import NoteScreen from "./app/pages/NoteScreen";
import NoteDetail from "./app/components/NoteDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorageLib.getItem("user");
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };
  useEffect(() => {
    findUser();
    // AsyncStorageLib.clear();
  }, []);
  const renderNoteScreen = (props) => <NoteScreen {...props} user={user} />;
  if (!user.name) return <Intro onFinish={findUser} />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={renderNoteScreen} name="NoteScreen" />
        <Stack.Screen component={NoteDetail} name="NoteDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
