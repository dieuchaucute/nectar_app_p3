// src/components/SearchBar.js

import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({
  value,
  onChangeText,
  onClear,
  onFilterPress,
}) {
  return (
    <View style={styles.container}>
      {/* Input */}
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={18} color="#7C7C7C" />

        <TextInput
          placeholder="Search Store"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholderTextColor="#7C7C7C"
        />

        {value !== "" && (
          <TouchableOpacity onPress={onClear}>
            <Ionicons name="close-circle" size={18} color="#7C7C7C" />
          </TouchableOpacity>
        )}
      </View>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterBtn} onPress={onFilterPress}>
        <Ionicons name="options-outline" size={20} color="#181725" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    paddingHorizontal: 12,
    height: 50,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#181725",
  },

  filterBtn: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#F2F3F2",
    alignItems: "center",
    justifyContent: "center",
  },
});