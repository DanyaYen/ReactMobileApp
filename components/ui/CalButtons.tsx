import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CalFN from "@/hooks/useCalculator";

interface CalButtonsProps {
  calc: ReturnType<typeof CalFN>;
}

const CalButtons: React.FC<CalButtonsProps> = ({ calc }) => {
  const {
    currentInput,
    result,
    handleNumberPress,
    handleOperatorPress,
    handleCalculate,
    handleClear,
  } = calc;

  const buttons = ["C", "/", "*", "-", 7, 8, 9, "+", 4, 5, 6, "=", 1, 2, 3, 0];

  const handlePress = (button: string | number) => {
    if (typeof button === "number") {
      handleNumberPress(button.toString());
    } else if (button === "C") {
      handleClear();
    } else if (button === "=") {
      handleCalculate();
    } else {
      handleOperatorPress(button);
    }
  };

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handlePress(button)}
        >
          <Text style={styles.text}>{button}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#000626",
    alignItems: "center",
  },
  button: {
    width: "25%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000626",
    margin: 0,
    borderWidth: 0,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CalButtons;
