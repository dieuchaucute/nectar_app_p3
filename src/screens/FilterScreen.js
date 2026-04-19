import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { categories, brands } from "../data/data";
import FilterItem from "../components/FilterItem";
import Button from "../components/Button";

export default function FilterScreen({ route, navigation }) {
  const { filters, onApply } = route.params;

  const [selectedCategories, setSelectedCategories] = useState(
    filters.categories || []
  );
  const [selectedBrands, setSelectedBrands] = useState(
    filters.brands || []
  );

  // toggle category
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // toggle brand
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // apply filter
  const handleApply = () => {
    const newFilters = {
      categories: selectedCategories,
      brands: selectedBrands,
    };

    onApply && onApply(newFilters);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#181725" />
        </TouchableOpacity>

        <Text style={styles.title}>Filters</Text>

        <View style={{ width: 24 }} /> 
        {/* spacer để title nằm giữa */}
      </View>

      {/* CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>

        {categories.map((item, index) => (
          <FilterItem
            key={index}
            label={item}
            selected={selectedCategories.includes(item)}
            onToggle={() => toggleCategory(item)}
          />
        ))}

        {/* Brand */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Brand
        </Text>

        {brands.map((item, index) => (
          <FilterItem
            key={index}
            label={item}
            selected={selectedBrands.includes(item)}
            onToggle={() => toggleBrand(item)}
          />
        ))}
      </ScrollView>

      {/* FOOTER BUTTON */}
      <View style={styles.footer}>
        <Button title="Apply Filter" onPress={handleApply} />
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },

  content: {
    paddingBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#181725",
  },

  footer: {
    paddingBottom: 20,
  },
});