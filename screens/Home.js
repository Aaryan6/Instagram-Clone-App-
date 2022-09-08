import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import PostList from "../components/PostList";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Home = () => {
  const [loaded] = useFonts({
    Lobster: require("../assets/fonts/LobsterTwo-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView className="flex-1">
      {/* Top Header */}
      <View
        className="bg-black flex-row p-2"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Text
          className="text-white font-bold"
          style={{ fontFamily: "Lobster", fontSize: 20 }}
        >
          Instagram
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "17%",
            marginRight: 5,
          }}
        >
          <Pressable>
            <FontAwesome name="plus-square-o" size={24} color="white" />
          </Pressable>
          <Pressable>
            <Feather name="send" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      {/* all posts */}
      <PostList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
