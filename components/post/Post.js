import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { formatDate } from "../../utils";
import { DEFAULT_IMAGE, theme } from "../../utils/constant";
import { ProfilePicture } from "../commons/ProfilePicture";
import { PostFooter } from "./PostFooter";
import { PostReaction } from "./PostReaction";

export const Post = ({ post }) => {
  const { colors } = theme;
  return (
    <Card style={styles.container}>
      <Card.Title
        title={post.username}
        subtitle={post.bio}
        left={() => <ProfilePicture uri={post.profilePicture} />}
        titleStyle={styles.username}
        subtitleStyle={styles.bio(colors)}
      />
      <Card.Content>
        <Text
          style={styles.caption}
          variant="bodyMedium"
        >
          {post.caption}
        </Text>
        <Text
          style={styles.postDate}
          variant="bodyMedium"
        >
          {formatDate(post.date)}
        </Text>
      </Card.Content>
      <Card.Cover
        style={styles.imagePost}
        source={{ uri: post.imageURL || DEFAULT_IMAGE }}
      />
      <Card.Content>
        <PostReaction post={post} />
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
  username: {
    fontStyle: "italic",
  },
  bio: ({ sunflower }) => ({
    color: sunflower,
    fontStyle: "italic",
  }),
  caption: {
    marginBottom: 10,
    textAlign: "justify",
  },
  postDate: {
    fontStyle: "italic",
    marginBottom: 10,
  },
});
