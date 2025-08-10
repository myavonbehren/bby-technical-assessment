// index.tsx
import { View } from "react-native";
import { GlobalStyles } from "../constants/Styles";
import ServiceScreen from "../screens/ServiceScreen";
import Colors from "@/constants/Colors";

export default function Index() {
    return (
        <View style={{
          flex: 1,
          backgroundColor: Colors.background.primary,
        }}>
            <ServiceScreen />
        </View> 
    );
}