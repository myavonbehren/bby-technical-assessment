// ServiceScreen.js
import { FlatList } from "react-native";
import { getAllServices } from "../data/mockServices";
import ServiceItem from "../components/ServiceMenu/ServiceItem";
import { GlobalStyles } from "../constants/Styles";

const ServiceScreen = () => {
    const mockServices = getAllServices();

    const renderServiceItem = ({ item, index }) => (
        <ServiceItem 
            service={item} 
            isLast={index === mockServices.length - 1}
            onPress={() => {}} 
            onMorePress={() => {}} 
        />
    );

    return (
        <FlatList
            style={GlobalStyles.screenContainer}
            data={mockServices}
            renderItem={renderServiceItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                gap: 10,
                paddingBottom: 20,
            }}
        />
    )
}
export default ServiceScreen;