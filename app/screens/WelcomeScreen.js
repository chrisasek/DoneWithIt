import React from "react";
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native";

import AppButton from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    width: 150,
    height: 100,
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 20,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default WelcomeScreen;
