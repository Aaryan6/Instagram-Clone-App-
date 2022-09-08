import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <ScrollView className="bg-black" style={{ width: "100%" }} horizontal>
      {Story()}
      {Story()}
      {Story()}
      {Story()}
      {Story()}
      {Story()}
      {Story()}
      {Story()}
      {Story()}
      {Story()}
    </ScrollView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});

function Story() {
  return (
    <View
      style={{
        width: 80,
        // backgroundColor: "red",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          borderRadius: 50,
          width: 60,
          height: 60,
          overflow: "hidden",
          alignSelf: "center",
        }}
      >
        <ImageBackground
          source={require("../assets/images/aa.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: 2,
          fontSize: 12,
        }}
      >
        Name
      </Text>
    </View>
  );
}
