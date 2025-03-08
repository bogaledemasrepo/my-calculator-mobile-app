import Row from "@/components/row";
import SpecialRow from "@/components/specialbn";
import { useMath } from "@/hooks/math";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const { expression } = useMath();
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <View style={{ flex: 1, margin: 8 }}>
          <Text
            style={{
              position: "absolute",
              bottom: 4,
              right: 4,
              fontSize: 18,
              fontWeight: "900",
            }}
          >
            {expression.join("") || 0}
          </Text>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            gap: 1,
            padding: 2,
          }}
        >
          <SpecialRow btn={["INV", "DEG", "%", "sin", "cos"]} />
          <SpecialRow btn={["tan", "ln", "log", "!", ""]} />
          <SpecialRow btn={["e", "^", "(", ")", ""]} />
        </View>
      </View>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            gap: 2,
            padding: 2,
          }}
        >
          <Row btn={["1", "2", "3", "DEL"]} />
          <Row btn={["4", "5", "6", "/"]} />
          <Row btn={["7", "8", "9", "X"]} />
          <Row btn={[".", "0", "=", "+"]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    padding: "2%",
    backgroundColor: "#0e0f18",
  },
  display: {
    flex: 3,
    backgroundColor: "#ddfffc",
    borderWidth: 1,
    borderRadius: 4,
  },
  keyboard: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
    gap: 8,
  },
  advancedKey: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
  },
});
