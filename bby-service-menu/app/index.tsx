import { View } from "react-native";
import Colors from "../constants/Colors";
import ServiceScreen from "../screens/ServiceScreen";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background.primary,
      }}
    >
      <ServiceScreen />
    </View> 
  );
}
