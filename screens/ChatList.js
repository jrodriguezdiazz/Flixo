import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { Card } from "react-native-paper";
import { AuthenticatedUserContext } from "../App";
import { ProfilePicture } from "../components/commons/ProfilePicture";
import { getUserChats, searchUsers } from "../database/user";

export const ChatList = ({ navigation }) => {
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);
  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const userChats = await getUserChats(uid);
      setChats(userChats);
    };

    fetchChats();
  }, [uid]);

  const renderChat = ({ item }) => (
    <ListItem
      onPress={() => navigation.navigate("Chat", { chat: item, uid })}
      key={item.id}
      leftAvatar={{ source: { uri: item.user.profilePicture } }}
      title={item.user.username}
      subtitle={item.lastMessage.text}
      rightSubtitle={item.lastMessage.createdAt}
      bottomDivider
    />
  );

  const searchUser = async (query) => {
    setSearchQuery(query);
    if (query) {
      const cleanUpSearch = await searchUsers(query, setSearchResults);
      return cleanUpSearch;
    } else {
      setSearchResults([]);
    }
  };

  const startChat = (user) => {
    // Aquí puedes agregar la funcionalidad para crear un nuevo chat con el usuario seleccionado.
    // Luego navega a la pantalla del chat.
  };

  const renderSearchResult = ({ item }) => {
    console.log(item);
    return (
      <TouchableWithoutFeedback>
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
    <View style={styles.container}>
      <SearchBar
        placeholder="Search user..."
        onChangeText={searchUser}
        value={searchQuery}
      />
      {searchQuery ? (
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={chats}
          renderItem={renderChat}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No hay chats disponibles.</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
