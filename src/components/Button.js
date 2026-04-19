import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";

export default function Button({ title, price, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>

      {price !== undefined && (
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${price}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },

  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  priceWrapper: {
    position: "absolute",
    right: 16,
    backgroundColor: "#489E67",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  price: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});