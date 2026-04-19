import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Image source={item.image} style={styles.image} />
      {/* INFO */}
      <View style={styles.info}>
        {/* TOP */}
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>

          <TouchableOpacity onPress={() => onRemove(item.id)}>
            <Ionicons name="close" size={18} color="#B3B3B3" />
          </TouchableOpacity>
        </View>

        <Text style={styles.unit}>{item.unit}</Text>

        {/* BOTTOM */}
        <View style={styles.bottomRow}>
          {/* QUANTITY */}
          <View style={styles.qtyWrapper}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => onDecrease(item.id)}
            >
              <Ionicons name="remove" size={16} color="#53B175" />
            </TouchableOpacity>

            <Text style={styles.quantity}>{item.quantity}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => onIncrease(item.id)}
            >
              <Ionicons name="add" size={16} color="#53B175" />
            </TouchableOpacity>
          </View>

          {/* PRICE */}
          <Text style={styles.price}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#F2F3F2",
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#181725",
    flex: 1,
    marginRight: 10,
  },

  unit: {
    fontSize: 12,
    color: "#7C7C7C",
    marginTop: 4,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
  },

  quantity: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
  },
});