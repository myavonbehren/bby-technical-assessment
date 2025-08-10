import { View } from "react-native";

import { getAllServices } from "../data/mockServices";
import ServiceItem from "../components/ServiceMenu/ServiceItem";
import Colors from "../constants/Colors";

const ServiceScreen = () => {

    const mockServices = getAllServices();

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.background.primary,
          }}>
            {mockServices.map((service) => (
                <ServiceItem 
                    key={service.id}
                    service={service} 
                    onPress={() => {}} 
                    onMorePress={() => {}} 
                />
            ))}
        </View>
    )
}

export default ServiceScreen;