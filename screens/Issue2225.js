import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Icon } from "react-native-elements";

// https://github.com/react-native-elements/react-native-elements/issues/2225
export default function Issue2225() {
  return (
    <View style={styles.container}>
      <Icon
        allowFontScaling
        name="sc-telegram"
        type="evilicon"
        color="#517fa4"
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
