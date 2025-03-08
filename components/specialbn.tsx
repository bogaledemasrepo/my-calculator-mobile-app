import { View } from "react-native";
import Smallbtn from "./smallbtn";

const SpecialRow = ({ btn }: { btn: string[] }) => (
  <View style={{ flex: 1, flexDirection: "row", gap: 4 }}>
    {btn.map((Item) => (
      <Smallbtn key={Item} label={Item.toString()} />
    ))}
  </View>
);

export default SpecialRow;
