import { Text, View } from "react-native";
import ServiceItem from "../components/ServiceMenu/ServiceItem";
import { getAllServices } from "../data/mockServices";
import Colors from "../constants/Colors";

export default function Index() {
  const mockServices = getAllServices();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.background.primary,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Hello</Text>
      <ServiceItem service={mockServices[0]} onPress={() => {}} onMorePress={() => {}} />

    </View> 
  );
}
