import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import { Card } from "react-native-paper";
import { ProfilePicture } from "./ProfilePicture";
import { RowDetails } from "./RowDetails";

export const RowItem = ({ info }) => {
  return (
    <TouchableOpacity>
      <Card style={styles.cardContainer}>
        <View style={styles.container}>
          <ProfilePicture uri={info.profilePicture} />
          <RowDetails info={info} />
        </View>
        <Divider
          width={1}
          orientation={"vertical"}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  cardContainer: {
    margin: 5,
  },
});
