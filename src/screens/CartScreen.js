import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

export default function CartScreen() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const getTotal = () => {
    return cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const renderItem = ({ item }) => (
    <CartItem
      item={item}
      onIncrease={increaseQty}
      onDecrease={decreaseQty}
      onRemove={removeItem}
    />
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>My Cart</Text>
      </View>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      )}

      {/* FOOTER */}
      {cart.length > 0 && (
        <View style={styles.footer}>
          <Button
            title="Go to Checkout"
            price={getTotal()}
            onPress={() => console.log("Checkout")}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    paddingBottom: 12,
    marginBottom: 10,
    marginTop: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#181725",
  },

  list: {
    paddingBottom: 120,
  },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 14,
    color: "#7C7C7C",
  },
});