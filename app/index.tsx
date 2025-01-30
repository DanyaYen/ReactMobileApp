import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./_layout"; // Укажите правильный путь до вашего `_layout.tsx`

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
