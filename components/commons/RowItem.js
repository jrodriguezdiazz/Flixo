import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";
import { ProfilePicture } from "./ProfilePicture";
import { RowDetails } from "./RowDetails";

export const RowItem = ({ info }) => {
  return (
    <View>
      <View style={styles.container}>
        <ProfilePicture uri={info.profilePicture} />
        <RowDetails info={info} />
      </View>
      <Divider
        width={1}
        orientation={"vertical"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
});
