import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { firebase } from "../../firebase";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Sign Out");
  } catch (error) {
    console.log(error);
  }
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logoInstagram}
          source={require("../../assets/instagram-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.iconsStyles}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/344/ffffff/add--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.iconsStyles}
            source={{
              uri: "https://img.icons8.com/ios-glyphs/344/ffffff/like.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadMessages}>
            <Text style={styles.unreadBoxMessages}>4</Text>
          </View>
          <Image
            style={styles.iconsStyles}
            source={{
              uri: "https://img.icons8.com/ios-filled/344/ffffff/chat-message--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  logoInstagram: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconsStyles: {
    width: 20,
    height: 20,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadMessages: {
    backgroundColor: "#e34439",
    position: "absolute",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    width: 22,
    height: 20,
    left: 15,
    bottom: 12,
  },
  unreadBoxMessages: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
