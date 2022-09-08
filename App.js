import { Image, StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./screens/Home";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";
import Messages from "./screens/Messages";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Foundation } from "@expo/vector-icons";
import Likes from "./screens/Likes";
import Reels from "./screens/Reels";
import Search from "./screens/Search";

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator barStyle={{ backgroundColor: "#000000" }}>
          {/* <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => (
                <Foundation name="home" size={24} color="#fff" />
              ),
              tabBarActiveBackgroundColor: "#000000",
              tabBarShowLabel: false,
              tabBarInactiveBackgroundColor: "#000000",
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarStyle: { borderTopWidth: 0 },
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: () => (
                <AntDesign name="search1" size={24} color="#fff" />
              ),
              tabBarActiveBackgroundColor: "#000000",
              tabBarShowLabel: false,
              tabBarInactiveBackgroundColor: "#000000",
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarStyle: { borderTopWidth: 0 },
            }}
          />
          <Tab.Screen
            name="Reels"
            component={Reels}
            options={{
              tabBarIcon: () => (
                <Entypo name="video-camera" size={24} color="#fff" />
              ),
              tabBarActiveBackgroundColor: "#000000",
              tabBarShowLabel: false,
              tabBarInactiveBackgroundColor: "#000000",
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarStyle: { borderTopWidth: 0 },
            }}
          />
          <Tab.Screen
            name="Likes"
            component={Likes}
            options={{
              tabBarIcon: () => (
                <AntDesign name="hearto" size={24} color="#fff" />

                // <AntDesign name="heart" size={24} color="#fff" />
              ),

              tabBarActiveBackgroundColor: "#000000",
              tabBarShowLabel: false,
              tabBarInactiveBackgroundColor: "#000000",
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarStyle: { borderTopWidth: 0 },
            }}
          /> */}
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require("./assets/images/aa.jpg")}
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
              ),
              tabBarActiveBackgroundColor: "#000000",
              tabBarShowLabel: false,
              tabBarInactiveBackgroundColor: "#000000",
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarStyle: { borderTopWidth: 0 },
            }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
