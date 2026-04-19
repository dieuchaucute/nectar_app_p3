import React, { useState, useMemo, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";

import { CartContext } from "../context/CartContext";
import { products } from "../data/data";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

export default function SearchScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
  });

  const { addToCart } = useContext(CartContext);

  const data = useMemo(() => {
    let result = [...products];

    if (keyword.trim() !== "") {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter((item) =>
        filters.categories.includes(item.category)
      );
    }

    if (filters.brands.length > 0) {
      result = result.filter((item) =>
        filters.brands.includes(item.brand)
      );
    }

    return result;
  }, [keyword, filters]);

  const handleClear = () => {
    setKeyword("");
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert("Success", `${item.name} added to cart`);
  };

  const handleOpenFilter = () => {
    navigation.navigate("Filter", {
      filters,
      onApply: (newFilters) => {
        setFilters(newFilters);
      },
    });
  };

  const renderItem = ({ item }) => (
    <ProductCard item={item} onAdd={handleAddToCart} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>

      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        onClear={handleClear}
        onFilterPress={handleOpenFilter}
      />

      {data.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  list: {
    paddingBottom: 20,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#7C7C7C",
    fontSize: 14,
  },
});