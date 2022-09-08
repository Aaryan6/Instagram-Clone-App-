import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { AntDesign, EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";

const Post = (props) => {
  //   const [saved, setSaved] = useState(false);
  //   const handleSaved = () => {
  //     setSaved(!saved);
  //   };
  return (
    <View>
      {/* header section */}
      <View
        className="flex-row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 8,
        }}
      >
        <View className="flex-row" style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/aa.jpg")}
            style={{ width: 35, height: 35, borderRadius: 50 }}
          />
          <Text className="text-white ml-2 font-bold">
            {props.item.username && props.item.username}
          </Text>
        </View>
        <View>
          <Feather
            name="more-vertical"
            size={24}
            color="#fff"
            style={{ justifyContent: "flex-end" }}
          />
        </View>
      </View>
      {/* image */}
      <View style={{ width: "100%" }}>
        <Image
          source={require("../assets/images/image2.jpg")}
          style={{ width: "100%", height: 500 }}
        />
      </View>
      {/* footer section */}
      <View
        className="flex-row"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 8,
        }}
      >
        <View
          className="flex-row"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "33%",
          }}
        >
          <AntDesign name="hearto" size={24} color="#ffffff" />
          <EvilIcons name="comment" size={34} color="#ffffff" />
          <Feather name="send" size={24} color="#ffffff" />
        </View>
        <View>
          {true ? (
            // <Pressable onPress={handleSaved}>
            <FontAwesome name="bookmark-o" size={24} color="#ffffff" />
          ) : (
            // </Pressable>
            // <Pressable onPress={handleSaved}>
            <FontAwesome name="bookmark" size={24} color="#ffffff" />
            // </Pressable>
          )}
        </View>
      </View>
      {/* post description */}
      <View
        style={{
          padding: 5,
        }}
      >
        {/* write comment section */}
        <Text className="text-white">
          {props.item.likes && props.item.likes} likes
        </Text>
        <Text className="text-white mt-1">
          <Text className="text-white font-semibold">
            {props.item.username && props.item.username}
          </Text>{" "}
          <Text className="text-gray-300">
            {props.item.desc && props.item.desc}... <Text>more</Text>
          </Text>
        </Text>
        <Text className="text-gray-400 mt-1">
          View all {props.item.comments && props.item.comments} comments
        </Text>
        {/* footer post */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Image
            source={require("../assets/images/aa.jpg")}
            style={{ width: 25, height: 25, borderRadius: 50 }}
          />
          <TextInput
            placeholder="Add a comment..."
            className="text-gray-300 flex-1 ml-2"
            style={{ color: "#fff" }}
            placeholderTextColor="#999"
          />
          <Text>❣️ 🙌🏻</Text>
          <AntDesign
            name="pluscircleo"
            size={16}
            color="#ddd"
            style={{ marginLeft: 6 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
