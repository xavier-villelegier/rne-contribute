import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button, Avatar } from "react-native-elements";

export default function Issue2233() {
  const AVATAR_URI =
    "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png";
  return (
    <View style={styles.container}>
      <Avatar source={{ uri: AVATAR_URI }} rounded size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
