import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Divider } from "react-native-elements";

export const bottomPanelIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material/344/ffffff/home-page.png",
    inactive: "https://img.icons8.com/material-sharp/344/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://millingtontownship.com/wp-content/uploads/2021/01/default.jpg",
    inactive:
      "https://t3.ftcdn.net/jpg/04/43/35/26/360_F_443352684_jFBzQhRy3drUvmomHyztAnWUyoUhifPG.jpg",
  },
];

const BottomPanel = ({ icons }) => {
  const [activePanel, setActivePanel] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActivePanel(icon.name)}>
      <Image
        source={{
          uri: activePanel === icon.name ? icon.active : icon.inactive,
        }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
    height: 45,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default BottomPanel;
