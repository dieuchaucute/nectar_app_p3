import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { products } from "../data/data";
import Button from "../components/Button";
import { CartContext } from "../context/CartContext";

export default function FavoriteScreen() {
  const { addToCart } = useContext(CartContext);

  // demo favorites
  const [favorites, setFavorites] = useState([
    products[0],
    products[2],
    products[4],
    products[6],
  ]);

  // add ALL
  const handleAddAll = () => {
    favorites.forEach((item) => addToCart(item));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* IMAGE */}
      <Image source={item.image} style={styles.image} />

      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}, Price</Text>
      </View>

      {/* RIGHT */}
      <View style={styles.right}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <TouchableOpacity onPress={() => addToCart(item)}>
          <Ionicons name="chevron-forward" size={20} color="#181725" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Favourite</Text>
      </View>

      {/* EMPTY */}
      {favorites.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No favourites yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        />
      )}

      {/* BUTTON */}
      {favorites.length > 0 && (
        <View style={styles.footer}>
          <Button title="Add All To Cart" onPress={handleAddAll} />
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
    paddingTop:50,
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

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#181725",
  },

  unit: {
    fontSize: 12,
    color: "#7C7C7C",
    marginTop: 4,
  },

  right: {
    alignItems: "flex-end",
  },

  price: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#181725",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
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
    color: "#7C7C7C",
  },
});