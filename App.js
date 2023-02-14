import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Platform,
  View,
  Dimensions,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
