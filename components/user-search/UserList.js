import React from "react";
import { FlatList, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card } from "react-native-paper";
import { ProfilePicture } from "../commons/ProfilePicture";
import { NoPostsFound } from "../post/NotPostFound";

export const UserList = ({ userList, navigation }) => {
  console.log(userList);
  if (!userList.length) return <NoPostsFound label={"Users"} />;
  const renderUser = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.push("ProfileScreen", {
            userId: item.userId,
          })
        }
      >
        <Card>
          <Card.Title
            style={styles.item}
            title={item.fullName}
            subtitle={"@" + item.username}
            left={() => <ProfilePicture uri={item.profilePicture} />}
          />
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={userList}
      renderItem={renderUser}
      keyExtractor={(item) => item.userId}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
  },
});
