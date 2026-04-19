// src/components/ProductCard.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductCard({ item, onAdd }) {
  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={styles.imageWrapper}>
       <Image source={item.image} style={styles.image} />
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>

        <Text style={styles.unit}>{item.unit}</Text>

        {/* Price + Add */}
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${item.price}</Text>

          <TouchableOpacity style={styles.addBtn} onPress={() => onAdd(item)}>
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    // shadow (Android)
    elevation: 3,
  },

  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
  },

  unit: {
    fontSize: 12,
    color: "#7C7C7C",
    marginBottom: 8,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
  },

  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#53B175",

    alignItems: "center",
    justifyContent: "center",
  },
});