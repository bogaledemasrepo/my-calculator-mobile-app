import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Btn from "./btn";

const Row = ({ btn }: { btn: string[] }) => (
  <View style={{ flex: 1, flexDirection: "row", gap: 4 }}>
    {btn.map((Item) => (
      <Btn key={Item} label={Item.toString()} />
    ))}
  </View>
);

export default Row;

const styles = StyleSheet.create({});
