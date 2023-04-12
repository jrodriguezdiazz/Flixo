import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { isFollowing, updateFollowStatus } from "../../firebase";
import { Button } from "../commons/Button";

export const FollowButton = ({ user, myUserId }) => {
  const followerId = user.userId;
  const [isAlreadyFollowed, setIsAlreadyFollowed] = useState(false);

  useEffect(() => {
    async function checkFollowing() {
      const isUserFollowing = await isFollowing(myUserId, followerId);
      setIsAlreadyFollowed(isUserFollowing);
    }

    checkFollowing();
  }, [myUserId, followerId]);

  const handleFollow = async () => {
    const newFollowingStatus = !isAlreadyFollowed;
    await updateFollowStatus(myUserId, followerId);
    setIsAlreadyFollowed(newFollowingStatus);
  };

  const label = isAlreadyFollowed ? "Unfollow" : "Follow";

  const icon = isAlreadyFollowed
    ? "account-minus-outline"
    : "account-plus-outline";

  return (
    <View style={styles.container}>
      <Button
        action={handleFollow}
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
