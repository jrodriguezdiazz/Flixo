import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthenticatedUserContext } from "../App";
import { Loading } from "../components/commons/Loading";
import { NoResultsFound } from "../components/commons/NoResultsFound";
import { ProfilePicture } from "../components/commons/ProfilePicture";
import { ChangeProfilePhoto } from "../components/edit-info/ChangeProfilePhoto";
import { CommonInfo } from "../components/edit-info/CommonInfo";
import { findUserById } from "../database/user";

export const EditProfile = () => {
  const {
    user: { uid },
  } = useContext(AuthenticatedUserContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const userData = await findUserById(uid);
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [uid]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <NoResultsFound />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ProfilePicture
            size={80}
            uri={user.profilePicture}
          />
          <ChangeProfilePhoto />
          <CommonInfo user={user} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
    marginVertical: 20,
    width: "100%",
  },
});
