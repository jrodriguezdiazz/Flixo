import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  addFollower,
  checkIfIsFollowing,
  removeFollower,
} from "../../database/user";
import { Button } from "../commons/Button";

export const FollowButton = ({ user, myUserId }) => {
  const [isAlreadyFollowed, setIsAlreadyFollowed] = useState(false);
  const [followerKey, setFollowerKey] = useState(null);

  useEffect(() => {
    const checkFollowingStatus = async () => {
      const { isFollowing, key } = await checkIfIsFollowing(
        myUserId,
        user.userId
      );
      setIsAlreadyFollowed(isFollowing);
      setFollowerKey(key);
    };

    checkFollowingStatus();
  }, [myUserId, user]);

  const handleFollowClick = async () => {
    if (isAlreadyFollowed) {
      await removeFollower(myUserId, user.userId, followerKey);
    } else {
      await addFollower(myUserId, user.userId);
    }
    setIsAlreadyFollowed(!isAlreadyFollowed);
  };

  const label = isAlreadyFollowed ? "Unfollow" : "Follow";
  const icon = isAlreadyFollowed
    ? "account-minus-outline"
    : "account-plus-outline";

  return (
    <View style={styles.container}>
      <Button
        action={handleFollowClick}
        icon={icon}
        label={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "55%",
    marginTop: 15,
  },
});
