import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/navigation/Header";
import { UserList } from "../components/user-search/UserList";
import { database } from "../firebase";

export const UserSearch = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = async (query) => {
    setSearchQuery(query);
    if (query.length >= 1) {
      const usersRef = database.collection("users");
      const querySnapshot = await usersRef
        .where("fullName", ">=", query)
        .where("fullName", "<=", query + "\uf8ff")
        .get();
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(users);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <SafeAreaView>
      <Header
        navigation={navigation}
        goToUserSearch={false}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <UserList
        userList={searchResults}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
