import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FilterItem({ label, selected, onToggle }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      {/* Checkbox */}
      <View style={[styles.checkbox, selected && styles.checkboxActive]}>
        {selected && (
          <Ionicons name="checkmark" size={14} color="#fff" />
        )}
      </View>

      {/* Label */}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#fff",
  },

  checkboxActive: {
    backgroundColor: "#53B175",
    borderColor: "#53B175",
  },

  label: {
    fontSize: 14,
    color: "#181725",
    fontWeight: "500",
  },
});