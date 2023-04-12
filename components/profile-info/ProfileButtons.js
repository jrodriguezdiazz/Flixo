import { EditProfileInfo } from "./EditProfileInfo";
import { FollowButton } from "./FollowButton";
import { Logout } from "./Logout";

export const ProfileButtons = ({
  myUserId,
  user,
  navigation,
  isOwnProfile,
}) => {
  return isOwnProfile ? (
    <>
      <EditProfileInfo navigation={navigation} />
      <Logout navigation={navigation} />
    </>
  ) : (
    <FollowButton
      user={user}
      myUserId={myUserId}
    />
  );
};
