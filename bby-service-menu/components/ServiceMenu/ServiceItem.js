import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';

const ServiceItem = ({ 
  service, 
  isLast = false, 
  onPress, 
  onMorePress 
}) => {
  const { id, name, duration, price } = service;

  return (
    <TouchableOpacity
      style={[
        GlobalStyles.serviceItem,
        isLast && GlobalStyles.serviceItemLast
      ]}
      onPress={() => onPress && onPress(service)}
      activeOpacity={GlobalStyles.touchable.activeOpacity}
    >

    <View style={GlobalStyles.serviceContent}>
            <Text style={GlobalStyles.serviceName} numberOfLines={1}>
            {name}
            </Text>
            <Text style={GlobalStyles.serviceDuration}>
            {duration} minutes
            </Text>
    </View>
      
    <View style={GlobalStyles.serviceRight}>
        <Text style={GlobalStyles.servicePrice}>
          ${price}
        </Text>
        
        <TouchableOpacity
          onPress={() => onMorePress && onMorePress(service)}
          hitSlop={GlobalStyles.hitSlop}
          activeOpacity={GlobalStyles.touchable.activeOpacity}
        >
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color={Colors.icon.tertiary}
          />
        </TouchableOpacity>
    </View>
        
        
            
      
    </TouchableOpacity>
  );
};

export default ServiceItem;