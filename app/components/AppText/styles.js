import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default styles;
