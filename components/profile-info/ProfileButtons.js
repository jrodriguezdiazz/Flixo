import { useContext } from "react";
import { AuthenticatedUserContext } from "../../App";
import { EditProfileInfo } from "./EditProfileInfo";
import { FollowButton } from "./FollowButton";
import { Logout } from "./Logout";

export const ProfileButtons = ({ user, navigation }) => {
  const { user: myUser } = useContext(AuthenticatedUserContext);
  const isOwnProfile = user.userId === myUser.uid;

  return isOwnProfile ? (
    <>
      <EditProfileInfo navigation={navigation} />
      <Logout navigation={navigation} />
    </>
  ) : (
    <FollowButton
      user={user}
      myUserId={myUser.uid}
    />
  );
};
