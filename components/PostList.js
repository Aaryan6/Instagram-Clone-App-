import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import HomeHeader from "./HomeHeader";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      username: "nikky",
      profileImage: null,
      postImage: "../assets/images/image1.jpg",
      desc: "reference for this and more options on the same.",
      likes: 345,
      comments: 23,
    },
    {
      username: "john",
      profileImage: null,
      postImage: "../assets/images/image2.jpg",
      desc: " It's best to follow official document. I think they described everything in a proper way",
      likes: 355,
      comments: 23,
    },
    {
      username: "zuck",
      profileImage: null,
      postImage: "image3.jpg",
      desc: " props are generally used for password input",
      likes: 2342,
      comments: 762,
    },
    {
      username: "binod",
      profileImage: null,
      postImage: "image4.jpg",
      desc: "Use the placeholderTextColor prop to change the color of the placeholder text",
      likes: 1235,
      comments: 253,
    },
    {
      username: "anna",
      profileImage: null,
      postImage: "image5.jpg",
      desc: "The placeholder doesn't even appear for the.",
      likes: 35,
      comments: 3,
    },
  ]);
  return (
    <FlatList
      ListHeaderComponent={<HomeHeader />}
      className="bg-black"
      data={posts}
      keyExtractor={(item, index) => {
        return index;
      }}
      renderItem={Post}
    />
  );
};

export default PostList;

const styles = StyleSheet.create({});

// const PostCard = (props) => {
//   const [saved, setSaved] = useState(false);

//   return (

//   );
// };
