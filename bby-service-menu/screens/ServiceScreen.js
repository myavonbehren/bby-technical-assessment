import { ScrollView } from "react-native";
import { useState } from "react";
import { mockServicesData } from "../data/mockServices";
import ServiceSection from "../components/ServiceMenu/ServiceSection";
import { GlobalStyles } from "../constants/Styles";

const ServiceScreen = () => {
  const [expandedSections, setExpandedSections] = useState({
    hair: true,
    nails: false,
    facial: false,
  });

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  return (
    <ScrollView style={GlobalStyles.listContainer}>
      {Object.entries(mockServicesData).map(([key, category]) => (
        <ServiceSection
          key={key}
          title={category.title}
          services={category.services}
          isExpanded={expandedSections[key]}
          onToggle={() => toggleSection(key)}
        />
      ))}
    </ScrollView>
  );
};

export default ServiceScreen;