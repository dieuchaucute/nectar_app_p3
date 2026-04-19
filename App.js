import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./src/context/CartContext";

import TabNavigator from "./src/navigation/TabNavigator";
import FilterScreen from "./src/screens/FilterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <CartProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Bottom Tabs */}
        <Stack.Screen name="Main" component={TabNavigator} />

        {/* Filter Screen */}
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
