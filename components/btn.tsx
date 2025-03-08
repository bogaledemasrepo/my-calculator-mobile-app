import { Pressable, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useMath } from "@/hooks/math";

const Btn = ({ label }: { label: string }) => {
  const { handlePress } = useMath();

  return (
    <TouchableOpacity style={styles.btncon} onPress={() => handlePress(label)}>
      <Text style={styles.btnlabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btncon: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  btnlabel: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
