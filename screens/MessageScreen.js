import { useContext, useEffect, useState } from "react";

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import { AuthenticatedUserContext } from "../App";
import { ProfilePicture } from "../components/commons/ProfilePicture";
import { getUsersListExcludingCurrentUser } from "../database/user";

export const MessageScreen = ({ navigation }) => {
  const [users, setUsers] = useState(null);
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const unsubscribe = getUsersListExcludingCurrentUser(uid, setUsers);
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <FlatList
            data={users}
            keyExtractor={(item) => item.userId}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(item);
                  navigation.navigate("ChatScreen", {
                    userId: item.userId,
                  });
                }}
              >
                <Card>
                  <Card.Title
                    style={styles.item}
                    title={item.header}
                    left={() => <ProfilePicture uri={item.profilePicture} />}
                  />
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Contain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    height: "auto",
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImage: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImageST: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textArea: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 5,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  userText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "900",
  },
  msgTime: {
    textAlign: "right",
    fontSize: 11,
    marginTop: -20,
  },
  msgContent: {
    paddingTop: 5,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});
