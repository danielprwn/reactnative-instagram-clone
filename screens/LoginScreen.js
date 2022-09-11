import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import LoginForm from "../components/login/LoginForm";

const INSTAGRAM_LOGO =
  "https://www.seekpng.com/png/detail/46-462623_herbalife-transparent-background-instagram-logo.png";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#303030",
          fontWeight: "700",
          textAlign: "center",
          fontSize: 25,
        }}
      >
        Log In!
      </Text>
      <View style={styles.logoInstagram}>
        <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 12,
    height: "100%",
  },

  logoInstagram: {
    alignItems: "center",
    marginTop: 70,
  },
});

export default LoginScreen;
