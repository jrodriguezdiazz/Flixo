import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/navigation/Header";
import { UserList } from "../components/user-search/UserList";
import { searchUsers } from "../database/user";

export const UserSearch = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const isValidSearchQuery = searchQuery.trim() !== "" && searchQuery.length;
    if (isValidSearchQuery) {
      const cleanUpSearch = searchUsers(searchQuery, setSearchResults);
      return cleanUpSearch;
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <SafeAreaView>
      <Header
        navigation={navigation}
        goToUserSearch={false}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <UserList
        userList={searchResults}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
