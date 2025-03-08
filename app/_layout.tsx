import { Stack } from "expo-router";
import { StatusBar, StyleSheet } from "react-native";
import MathContextProvider from "@/hooks/math";
export default function RootLayout() {
  class Nots {
    dbconnected = false;
    connectDb = async () => {
      const connection = setTimeout(() => {
        return true;
      }, 2000);
      if (connection) this.dbconnected = true;
    };
  }
  return (
    <MathContextProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="detail" />
        <StatusBar barStyle={"dark-content"} />
      </Stack>
    </MathContextProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    backgroundColor: "#f8aa22",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#505050",
    fontFamily: "san-serif",
  },
});
