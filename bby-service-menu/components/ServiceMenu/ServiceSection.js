import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ServiceItem from './ServiceItem';
import { GlobalStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';

const ServiceSection = ({ 
  title, 
  services, 
  isExpanded, 
  onToggle 
}) => {
  const renderServiceItem = ({ item, index }) => (
    <ServiceItem 
      service={item} 
      isLast={index === services.length - 1}
      onPress={() => {}} 
      onMorePress={() => {}} 
    />
  );

  return (
    <View style={GlobalStyles.sectionContainer}>
      <TouchableOpacity
        style={GlobalStyles.sectionHeader}
        onPress={onToggle}
        activeOpacity={GlobalStyles.touchable.activeOpacity}
      >
        <Text style={GlobalStyles.sectionTitle}>{title}</Text>
        <Ionicons
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={16}
          color={Colors.icon.secondary}
        />
      </TouchableOpacity>
      
      {isExpanded && (
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10
          }}
        />
      )}
    </View>
  );
};

export default ServiceSection;