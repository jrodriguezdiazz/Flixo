import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import { Card } from "react-native-paper";
import { theme } from "../../utils/constant";
import { ProfilePicture } from "./ProfilePicture";
import { RowDetails } from "./RowDetails";

export const RowItem = ({ info, navigation }) => {
  const { colors } = theme;
  return (
    <TouchableOpacity>
      <Card style={styles.cardContainer(colors, info.seen)}>
        <View style={styles.container}>
          <ProfilePicture
            uri={info.profilePicture}
            goTo={() =>
              navigation.push("ProfileScreen", {
                userId: info.userId,
              })
            }
          />
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
  cardContainer: ({ bone, white }, seen) => ({
    margin: 5,
    backgroundColor: seen ? white : bone,
  }),
});
