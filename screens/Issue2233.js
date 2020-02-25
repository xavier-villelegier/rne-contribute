import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Input, Avatar } from "react-native-elements";

const initialState = {
  firstname: "Salut",
  profileImg: {
    uri:
      "https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png"
  }
};

// https://github.com/react-native-elements/react-native-elements/issues/2233
export default function Issue2233() {
  const [profile, setProfile] = React.useState(initialState);
  console.log(profile)
  return (
    <View style={styles.container}>
      <Avatar
        size={"xlarge"}
        rounded
        source={profile.profileImg}
        showEditButton={true}
      />
      <Input
        label={"firstname"}
        // placeholder="Prénom"
        autoCapitalize="none"
        //editable={true}
        onChangeText={value => setProfile({ ...profile, firstname: value })}
        value={profile.firstname}
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
