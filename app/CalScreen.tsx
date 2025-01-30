import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/ui/Header";
import CalButtons from "@/components/ui/CalButtons";
import CalFN from "@/hooks/useCalculator";

export default function CalculatorGrid() {
  const calc = CalFN(); // Инициализируем хук

  return (
    <View style={{ flex: 1 }}>
      <Header title="ShitAI" />
      <View style={styles.display}>
        <Text style={styles.result}>
          {calc.result !== "" ? calc.result : calc.currentInput || "0"}
        </Text>
      </View>
      <CalButtons calc={calc} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "#D9D9D9",
  },
  result: {
    fontSize: 48,
    color: "#fff",
  },
});
