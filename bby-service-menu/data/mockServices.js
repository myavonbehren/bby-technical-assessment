// data/mockServices.js

export const mockServicesData = {
    hair: {
      title: "Hair",
      services: [
        { id: 1, name: "Blowout", duration: 60, price: 20 },
        { id: 2, name: "Cut & Style", duration: 90, price: 45 },
        { id: 3, name: "Color Touch-up", duration: 120, price: 85 },
        { id: 4, name: "Full Color", duration: 180, price: 120 },
        { id: 5, name: "Highlights", duration: 150, price: 95 }
      ]
    },
    nails: {
      title: "Nails",
      services: [
        { id: 6, name: "Manicure", duration: 45, price: 25 },
        { id: 7, name: "Pedicure", duration: 60, price: 35 },
        { id: 8, name: "Gel Manicure", duration: 60, price: 40 },
        { id: 9, name: "Gel Pedicure", duration: 75, price: 50 },
        { id: 10, name: "Acrylic Set", duration: 120, price: 70 },
      ]
    },
    facial: {
      title: "Facial Treatments",
      services: [
        { id: 11, name: "Basic Facial", duration: 60, price: 60 },
        { id: 12, name: "Deep Cleansing Facial", duration: 75, price: 80 },
        { id: 13, name: "Anti-Aging Treatment", duration: 90, price: 120 },
          ]
    },
    waxing: {
      title: "Waxing Services",
      services: [
        { id: 33, name: "Eyebrow Wax", duration: 15, price: 20 },
        { id: 34, name: "Upper Lip Wax", duration: 10, price: 15 },
        { id: 35, name: "Full Face Wax", duration: 30, price: 40 }
      ]
    },
    packages: {
      title: "Packages",
      services: [
        { id: 41, name: "Everything", duration: 300, price: 150 },
        { id: 42, name: "Hair & Nails Combo", duration: 150, price: 65 },
        { id: 43, name: "Bridal Package", duration: 360, price: 250 }
      ]
    }
  };
  
  // Helper function to get all services as a flat array
  export const getAllServices = () => {
    return Object.values(mockServicesData).flatMap(category => category.services);
  };
  
  // Helper function to get services by category
  export const getServicesByCategory = (categoryKey) => {
    return mockServicesData[categoryKey] || null;
  };
  
  // Helper function to search services by name
  export const searchServices = (searchTerm) => {
    if (!searchTerm) return mockServicesData;
    
    const filteredData = {};
    Object.keys(mockServicesData).forEach(categoryKey => {
      const category = mockServicesData[categoryKey];
      const filteredServices = category.services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (filteredServices.length > 0) {
        filteredData[categoryKey] = {
          ...category,
          services: filteredServices
        };
      }
    });
    
    return filteredData;
  };
  
  // Helper function to get service by ID
  export const getServiceById = (serviceId) => {
    const allServices = getAllServices();
    return allServices.find(service => service.id === serviceId);
  };