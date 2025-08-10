// ServiceScreen.js
import { View, RefreshControl } from "react-native";
import { useState, useEffect } from "react";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { mockServicesData } from "../data/mockServices";
import ServiceSection from "../components/ServiceMenu/ServiceSection";
import { GlobalStyles } from "../constants/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ServiceScreen = () => {
  const [expandedSections, setExpandedSections] = useState({
    hair: false,
    nails: false,
    facial: false,
  });
  const [servicesData, setServicesData] = useState(mockServicesData);
  const [sectionOrder, setSectionOrder] = useState(Object.keys(mockServicesData));
  const [refreshing, setRefreshing] = useState(false);

  // Load saved order on component mount
  useEffect(() => {
    loadServicesOrder();
  }, []);

  const loadServicesOrder = async () => {
    try {
      const savedOrder = await AsyncStorage.getItem('servicesOrder');
      const savedSectionOrder = await AsyncStorage.getItem('sectionOrder');
      
      if (savedOrder) {
        setServicesData(JSON.parse(savedOrder));
      }
      if (savedSectionOrder) {
        setSectionOrder(JSON.parse(savedSectionOrder));
      }
    } catch (error) {
      console.log('Error loading services order:', error);
    }
  };

  const saveServicesOrder = async (newOrder) => {
    try {
      await AsyncStorage.setItem('servicesOrder', JSON.stringify(newOrder));
    } catch (error) {
      console.log('Error saving services order:', error);
    }
  };

  const saveSectionOrder = async (newSectionOrder) => {
    try {
      await AsyncStorage.setItem('sectionOrder', JSON.stringify(newSectionOrder));
    } catch (error) {
      console.log('Error saving section order:', error);
    }
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const handleReorderServices = (sectionKey, reorderedServices) => {
    const newData = {
      ...servicesData,
      [sectionKey]: {
        ...servicesData[sectionKey],
        services: reorderedServices
      }
    };
    setServicesData(newData);
    saveServicesOrder(newData);
  };

  const handleReorderSections = ({ data }) => {
    const newSectionOrder = data.map(item => item.key);
    setSectionOrder(newSectionOrder);
    saveSectionOrder(newSectionOrder);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reload data from storage
      await loadServicesOrder();
      
      // You could also fetch fresh data from an API here
      console.log('Data refreshed successfully');
    } catch (error) {
      console.log('Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  // Prepare data for section-level dragging
  const sectionData = sectionOrder.map(key => ({
    key,
    category: servicesData[key]
  }));

  const renderSection = ({ item, drag, isActive }) => {
    const { key, category } = item;
    
    return (
      <ServiceSection
        key={key}
        title={category.title}
        services={category.services}
        isExpanded={expandedSections[key]}
        onToggle={() => toggleSection(key)}
        onReorder={(reorderedServices) => handleReorderServices(key, reorderedServices)}
        onLongPress={drag}
        isDragging={isActive}
      />
    );
  };

      return (
      <View style={GlobalStyles.listContainer}>
        <DraggableFlatList
          data={sectionData}
          renderItem={renderSection}
          keyExtractor={(item) => item.key}
          onDragEnd={handleReorderSections}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
            flexGrow: 1,
            minHeight: '100%'
          }}
          dragItemOverflow={false}
          animationConfig={{
            timing: {
              duration: 300,
            },
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#6B7280"
              colors={["#6B7280"]}
              progressBackgroundColor="#F9FAFB"
            />
          }
        />
      </View>
    );
};

export default ServiceScreen;