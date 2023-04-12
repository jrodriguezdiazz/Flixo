import React from "react";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { NoPostsFound } from "../post/NotPostFound";

export const UserList = ({ userList, navigation }) => {
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
            title={item.fullName}
            subtitle={"@" + item.username}
            left={() => (
              <Avatar.Image
                size={50}
                source={{ uri: item.profilePicture }}
              />
            )}
          />
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <FlatList
      data={userList}
      renderItem={renderUser}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
