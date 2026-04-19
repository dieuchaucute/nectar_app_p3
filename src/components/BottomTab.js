// src/components/BottomTab.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomTab({ state, navigation }) {
  const tabs = [
    { name: "Shop", icon: "storefront-outline" },
    { name: "Explore", icon: "search-outline" },
    { name: "Cart", icon: "cart-outline" },
    { name: "Favourite", icon: "heart-outline" },
    { name: "Account", icon: "person-outline" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Ionicons
              name={tab.icon}
              size={22}
              color={isActive ? "#53B175" : "#181725"}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#E2E2E2",
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    fontSize: 11,
    marginTop: 4,
    color: "#181725",
  },

  activeLabel: {
    color: "#53B175",
    fontWeight: "600",
  },
});