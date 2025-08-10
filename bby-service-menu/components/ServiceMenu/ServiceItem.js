import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';

// PropTypes for better type checking and documentation
const ServiceItem = ({ 
  service, 
  isLast = false, 
  onPress, 
  onMorePress,
  onLongPress,
  isDragging = false,
  isSelected = false,
  isDisabled = false,
  userPermissions = { canEdit: true, canDelete: true }
}) => {
  // Destructure with defaults to handle missing data gracefully
  const { 
    id, 
    name = 'Unnamed Service', 
    duration = 0, 
    price = 0,
    status = 'active',
    category = 'general',
    lastModified = null,
    createdBy = null
  } = service || {};

  // Memoized computed values for performance
  const itemStyles = useMemo(() => [
    GlobalStyles.serviceItem,
    isLast && GlobalStyles.serviceItemLast,
    isDragging && { opacity: 0.5 },
    isSelected && { borderColor: Colors.accent?.primary || '#3B82F6', borderWidth: 2 },
    isDisabled && { opacity: 0.4 }
  ], [isLast, isDragging, isSelected, isDisabled]);

  const isActive = status === 'active';
  const canInteract = isActive && !isDisabled;

  // Handle press events with proper error handling
  const handlePress = () => {
    if (!canInteract || !onPress) return;
    try {
      onPress(service);
    } catch (error) {
      console.error('Error handling service press:', error);
    }
  };

  const handleLongPress = () => {
    if (!canInteract || !onLongPress) return;
    try {
      onLongPress();
    } catch (error) {
      console.error('Error handling service long press:', error);
    }
  };

  const handleMorePress = () => {
    if (!canInteract || !onMorePress) return;
    try {
      onMorePress(service);
    } catch (error) {
      console.error('Error handling more press:', error);
    }
  };

  return (
    <TouchableOpacity
      style={itemStyles}
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={canInteract ? GlobalStyles.touchable.activeOpacity : 1}
      disabled={!canInteract}
    >

    <View style={GlobalStyles.serviceContent}>
      <Text style={GlobalStyles.serviceName} numberOfLines={1}>
        {name}
      </Text>
      <Text style={GlobalStyles.serviceDuration}>
        {duration > 0 ? `${duration} minutes` : 'Duration not set'}
      </Text>
      {/* Show status indicator for non-active services */}
      {!isActive && (
        <Text style={{ fontSize: 12, color: Colors.text.secondary, fontStyle: 'italic' }}>
          {status}
        </Text>
      )}
    </View>
      
    <View style={GlobalStyles.serviceRight}>
      <Text style={GlobalStyles.servicePrice}>
        ${price > 0 ? price.toFixed(2) : '0.00'}
      </Text>
      
      {/* Only show more options if user has permissions */}
      {userPermissions.canEdit && (
        <TouchableOpacity
          onPress={handleMorePress}
          hitSlop={GlobalStyles.hitSlop}
          activeOpacity={GlobalStyles.touchable.activeOpacity}
          disabled={!canInteract}
        >
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color={canInteract ? Colors.icon.tertiary : Colors.text.secondary}
          />
        </TouchableOpacity>
      )}
    </View>
    </TouchableOpacity>
  );
};

// Add PropTypes for better development experience
ServiceItem.defaultProps = {
  isLast: false,
  isDragging: false,
  isSelected: false,
  isDisabled: false,
  userPermissions: { canEdit: true, canDelete: true }
};

export default ServiceItem;