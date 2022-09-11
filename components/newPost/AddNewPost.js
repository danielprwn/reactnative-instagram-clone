import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/ffffff/external-back-arrow-flatart-icons-outline-flatarticons.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.topText}>ADD NEW POST!</Text>
    <Text></Text>
  </View>
);

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
    marginRight: 20,
    marginTop: 85,
  },
});

export default AddNewPost;
