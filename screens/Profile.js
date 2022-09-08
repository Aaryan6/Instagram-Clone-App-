import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const profileHeader = (
  <View
    className="bg-black flex-row p-2"
    style={{ alignItems: "center", justifyContent: "space-between" }}
  >
    <Text
      className="text-white font-bold"
      style={{ fontFamily: "", fontSize: 20 }}
    >
      aaryanpatel2.0
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
        <Feather name="menu" size={24} color="#ffffff" />
      </Pressable>
    </View>
  </View>
);
const profileInfo = (
  <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          source={require("../assets/images/aa.jpg")}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <Text className="font-semibold text-center text-white">
          Aaryan Patel
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "70%",
        }}
      >
        <View style={{}}>
          <Text className="font-semibold text-center text-white text-lg">
            8
          </Text>
          <Text className="text-center text-white">Posts</Text>
        </View>
        <View>
          <Text className="font-semibold text-center text-white text-lg">
            102
          </Text>
          <Text className="text-center text-white">Followers</Text>
        </View>
        <View>
          <Text className="font-semibold text-center text-white text-lg">
            251
          </Text>
          <Text className="text-center text-white">Following</Text>
        </View>
      </View>
    </View>
    {/* desc */}
    <View>
      <Text className="text-white" style={{ lineHeight: 19 }}>
        I am{"\n"}A Full stack developer{"\n"}A Reader{"\n"}Visit my website
        {"\n"}
        codewithaaryan.netlify.com
      </Text>
    </View>
  </View>
);
const Stories = (
  <ScrollView horizontal className="py-3 px-2">
    <View
      className=""
      style={{ display: "flex", alignItems: "center", width: 80 }}
    >
      <Image
        source={require("../assets/images/aa.jpg")}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <Text className="text-white">Books</Text>
    </View>
    <View
      className=""
      style={{ display: "flex", alignItems: "center", width: 80 }}
    >
      <Image
        source={require("../assets/images/aa.jpg")}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <Text className="text-white">Quotes</Text>
    </View>
    <View
      className=" flex"
      style={{ display: "flex", alignItems: "center", width: 80 }}
    >
      <Image
        source={require("../assets/images/aa.jpg")}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <Text className="text-white">Photography</Text>
    </View>
  </ScrollView>
);

// main  function
const Profile = () => {
  const [pos, setPos] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <ScrollView className="bg-black">
      {profileHeader}
      {profileInfo}
      {/* buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
      >
        <TouchableOpacity
          className="bg-zinc-800 flex-1"
          style={{ borderRadius: 5 }}
        >
          <Text className="text-white text-center p-2">Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-zinc-800 ml-1"
          style={{ borderRadius: 10, padding: 7 }}
        >
          <Ionicons name="person-add-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {/* stories */}
      {Stories}
      {/* Posts */}
      <View>
        <View style={{ flexDirection: "row", paddingTop: 5 }}>
          <Pressable
            className="flex-1 justify-center"
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            }}
          >
            <MaterialCommunityIcons
              name="table-large"
              size={28}
              color="#ffffff"
              className=""
            />
          </Pressable>
          <Pressable
            className="flex-1 justify-center"
            style={{ flexDirection: "row" }}
          >
            <MaterialIcons name="perm-contact-cal" size={28} color="#ffffff" />
          </Pressable>
        </View>
        {/* posts */}
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
          <Pressable
            className="bg-red-400"
            style={{ width: "33%", margin: 0.5 }}
          >
            <Image
              source={require("../assets/images/aa.jpg")}
              // style={{ resizeMode: "cover" }}
              style={{ height: 120, width: "100%" }}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
