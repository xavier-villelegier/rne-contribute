import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Image } from "react-native-elements";

export default function Issue2206() {
  const AVATAR_URI =
    "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png";

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: AVATAR_URI }}
        onLoad={() => console.log("Loaded")}
      />
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
