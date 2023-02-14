import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  AppSubmitButton,
} from "../components/forms";
import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

function ListingEditScreen(props) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
  });

  const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
    { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  ];

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/background.jpg")} />

      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField name="title" placeholder="Title" maxLength={255} />
        <FormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <Picker
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          items={categories}
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          name="description"
          placeholder="Description"
          numberOfLines={3}
          maxLength={255}
          multiline
        />

        <AppSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default ListingEditScreen;
