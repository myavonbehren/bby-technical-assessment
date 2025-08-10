// ServiceSection.js
import React, { useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Easing } from 'react-native';
import ServiceItem from './ServiceItem';
import { GlobalStyles } from '../../constants/Styles';
import Colors from '../../constants/Colors';

const ServiceSection = ({ 
  title = 'Untitled Section', 
  services = [], 
  isExpanded = false, 
  onToggle,
  onReorder,
  onLongPress,
  isDragging = false,
  isDisabled = false,
  userPermissions = { canEdit: true, canDelete: true, canReorder: true }, // User permissions for the section (mock implementation)
  sectionId = null,
  maxItems = 50, // Prevent performance issues with large lists (max 50 services per section)
  onServicePress,
  onServiceMorePress
}) => {
  // Memoized computed values for performance (re-renders only when necessary)
  const containerStyles = useMemo(() => [
    GlobalStyles.sectionContainer,
    isDragging && { opacity: 0.8, backgroundColor: Colors.background.secondary },
    isDisabled && { opacity: 0.6 }
  ], [isDragging, isDisabled]);

  const canInteract = !isDisabled && userPermissions.canEdit;
  const canReorder = canInteract && userPermissions.canReorder;

  // Validate and limit services array
  const validServices = useMemo(() => {
    if (!Array.isArray(services)) return [];
    return services
      .filter(service => service && service.id) // Filter out invalid services
      .slice(0, maxItems); // Limit to prevent performance issues
  }, [services, maxItems]);

  // Memoized render function for better performance (re-renders only when necessary)
  const renderServiceItem = useCallback(({ item, index, drag, isActive }) => {
    if (!item || !item.id) return null; // Skip invalid items
    
    return (
      <ServiceItem 
        service={item} 
        isLast={index === validServices.length - 1}
        onPress={onServicePress} 
        onMorePress={onServiceMorePress} 
        onLongPress={canReorder ? drag : undefined}
        isDragging={isActive}
        userPermissions={userPermissions}
        isDisabled={isDisabled}
      />
    );
  }, [validServices.length, onServicePress, onServiceMorePress, canReorder, userPermissions, isDisabled]);

  // Handle section toggle with error handling
  const handleToggle = useCallback(() => {
    if (!canInteract || !onToggle) return;
    try {
      onToggle();
    } catch (error) {
      console.error('Error toggling section:', error);
    }
  }, [canInteract, onToggle]);

  // Handle section long press with error handling
  const handleLongPress = useCallback(() => {
    if (!canInteract || !onLongPress) return;
    try {
      onLongPress();
    } catch (error) {
      console.error('Error handling section long press:', error);
    }
  }, [canInteract, onLongPress]);

  // Handle service reorder with error handling
  const handleReorder = useCallback(({ data }) => {
    if (!canReorder || !onReorder) return;
    try {
      onReorder(data);
    } catch (error) {
      console.error('Error reordering services:', error);
    }
  }, [canReorder, onReorder]);

  return (
    <View style={containerStyles}>
      <TouchableOpacity
        style={GlobalStyles.sectionHeader}
        onPress={handleToggle}
        onLongPress={handleLongPress}
        activeOpacity={canInteract ? GlobalStyles.touchable.activeOpacity : 1}
        disabled={!canInteract}
      >
        <Text style={GlobalStyles.sectionTitle}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Show service count for better UX */}
          {validServices.length > 0 && (
            <Text style={{ 
              fontSize: 12, 
              color: Colors.text.secondary, 
              marginRight: 8 
            }}>
              {validServices.length} service{validServices.length !== 1 ? 's' : ''}
            </Text>
          )}
          
          <Ionicons
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={16}
            color={canInteract ? Colors.icon.secondary : Colors.text.secondary}
          />
        </View>
      </TouchableOpacity>
      
      {isExpanded && validServices.length > 0 && (
        <DraggableFlatList
          data={validServices}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item?.id?.toString() || Math.random().toString()}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          onDragEnd={handleReorder}
          animationConfig={{
            timing: {
              duration: 300,
              easing: Easing.out(Easing.cubic),
            },
          }}
          dragItemOverflow={false}
          dragHitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          dragActivationTreshold={10}
          removeClippedSubviews={true} // Performance optimization
          maxToRenderPerBatch={10} // Performance optimization
          windowSize={10} // Performance optimization
        />
      )}
      
      {/* Show message when no services */}
      {isExpanded && validServices.length === 0 && (
        <View style={{ 
          padding: 20, 
          alignItems: 'center',
          backgroundColor: Colors.background.primary,
          borderRadius: 8,
          margin: 8
        }}>
          <Text style={{ 
            color: Colors.text.secondary, 
            fontSize: 14,
            fontStyle: 'italic'
          }}>
            No services available
          </Text>
        </View>
      )}
    </View>
  );
};

// Add default props for better development experience
ServiceSection.defaultProps = {
  title: 'Untitled Section',
  services: [],
  isExpanded: false,
  isDragging: false,
  isDisabled: false,
  userPermissions: { canEdit: true, canDelete: true, canReorder: true },
  maxItems: 50
};

export default ServiceSection;