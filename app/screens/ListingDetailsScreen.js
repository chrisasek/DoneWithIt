import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/background.jpg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/background.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
