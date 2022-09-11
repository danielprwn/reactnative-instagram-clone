import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

//Stories display horizontal and slice long login names
const Stories = () => {
  return (
    <View style={{ marginBottom: 14 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((stories, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image style={styles.stories} source={{ uri: stories.image }} />
            <Text style={{ color: "#ffffff" }}>
              {stories.user.length > 8
                ? stories.user.slice(0, 7).toLowerCase() + "..."
                : stories.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
    marginLeft: 10,
    borderColor: "#e6a715",
  },
});

export default Stories;
