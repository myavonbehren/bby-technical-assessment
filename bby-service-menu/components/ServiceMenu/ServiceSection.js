// ServiceSection.js
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Easing } from 'react-native';
import ServiceItem from './ServiceItem';
import { GlobalStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';

const ServiceSection = ({ 
  title, 
  services, 
  isExpanded, 
  onToggle,
  onReorder,
  onLongPress,
  isDragging = false
}) => {
  const renderServiceItem = ({ item, index, drag, isActive }) => (
    <ServiceItem 
      service={item} 
      isLast={index === services.length - 1}
      onPress={() => {}} 
      onMorePress={() => {}} 
      onLongPress={drag}
      isDragging={isActive}
    />
  );

  return (
    <View style={[
      GlobalStyles.sectionContainer,
      isDragging && { opacity: 0.8, backgroundColor: Colors.background.secondary }
    ]}>
      <TouchableOpacity
        style={GlobalStyles.sectionHeader}
        onPress={onToggle}
        onLongPress={onLongPress}
        activeOpacity={GlobalStyles.touchable.activeOpacity}
      >
        <Text style={GlobalStyles.sectionTitle}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
          <Ionicons
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={16}
            color={Colors.icon.secondary}
          />
        </View>
      </TouchableOpacity>
      
      {isExpanded && (
        <DraggableFlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          onDragEnd={({ data }) => onReorder && onReorder(data)}
          animationConfig={{
            timing: {
              duration: 300,
              easing: Easing.out(Easing.cubic),
            },
          }}
          dragItemOverflow={false}
          dragHitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          dragActivationTreshold={10}
        />
      )}
    </View>
  );
};

export default ServiceSection;