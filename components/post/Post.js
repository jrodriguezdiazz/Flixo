import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { DEFAULT_IMAGE } from "../../utils/constant";
import { ProfilePicture } from "../commons/ProfilePicture";
import { PostSection } from "./PostComment";
import { PostFooter } from "./PostFooter";
import { PostReaction } from "./PostReaction";

export const Post = ({ post }) => {
  return (
    <Card style={styles.container}>
      <Card.Title
        title={post.username}
        subtitle={post.bio}
        left={() => <ProfilePicture uri={post.profilePicture} />}
      />
      <Card.Content>
        <Text variant="bodyMedium">{post.caption}</Text>
        <Text variant="bodyMedium">{post.date}</Text>
      </Card.Content>
      <Card.Cover
        style={styles.imagePost}
        source={{ uri: post.imageURL || DEFAULT_IMAGE }}
      />
      <Card.Content>
        <PostReaction post={post} />
        <PostSection post={post} />
      </Card.Content>
      <Card.Actions>
        <PostFooter />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  imagePost: {
    width: "100%",
    height: 450,
  },
});
