import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PlaceholderScreen({ title }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{title}</Text>
    </View>
  );
}

// ✅ STACK cho Explore
function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "Shop":
              iconName = "storefront-outline";
              break;
            case "Explore":
              iconName = "search-outline";
              break;
            case "Cart":
              iconName = "cart-outline";
              break;
            case "Favourite":
              iconName = "heart-outline";
              break;
            case "Account":
              iconName = "person-outline";
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={22}
              color={focused ? "#53B175" : "#181725"}
            />
          );
        },

        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#181725",
      })}
    >
      <Tab.Screen
        name="Shop"
        children={() => <PlaceholderScreen title="Shop" />}
      />

      {/* ✅ FIX CHUẨN */}
      <Tab.Screen name="Explore" component={ExploreStack} />

      <Tab.Screen name="Cart" component={CartScreen} />

      <Tab.Screen name="Favourite" component={FavoriteScreen} />

      <Tab.Screen
        name="Account"
        children={() => <PlaceholderScreen title="Account" />}
      />
    </Tab.Navigator>
  );
}