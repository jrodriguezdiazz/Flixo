import { POSTS } from "./post";

export const USER_DATA = {
  fullName: "Jorge Rodríguez Díaz",
  bio: "It's Curious George",
  username: "@jrodriguezdiazz",
  isOwnProfile: true,
  profilePicture:
    "https://instagram.fsti2-1.fna.fbcdn.net/v/t51.2885-19/334683644_217978764048457_2214545457929857106_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsti2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BRPQYZWkgB0AX_c2Zpt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkWrg9Jym7p4BjmdM0S8bxkV6Lq-dleuKxuaFHLD68yg&oe=641BA41A&_nc_sid=8fd12b",
  statics: [
    {
      label: "Posts",
      number: 9,
    },
    {
      label: "Followers",
      number: 834,
    },
    {
      label: "Following",
      number: 162,
    },
  ],
  posts: POSTS,
};
