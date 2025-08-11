# BBY Technical Assessment.

A React Native application for managing service menus with drag-and-drop functionality, built with Expo for iOS and Android.

To quickly see a live demo, I created an [Expo Snack](https://snack.expo.dev/@mvonbehr/bby-tech-assessment). It is best when using the Expo Go app.

## Technology Stack

- **React Native** with Expo SDK
- **React Hooks** (useState, useEffect) for state management
- **AsyncStorage** for local data persistence
- **react-native-draggable-flatlist** for drag-and-drop functionality
- **react-native-gesture-handler** for gesture recognition
- **@expo/vector-icons** for iconography

## How to Run the Project

### Installation
```bash
# Clone the repository
git clone https://github.com/myavonbehren/bby-technical-assessment
cd bby-service-menu

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Running on Device/Simulator
- **iOS**: Press `i` in terminal or scan QR code with Camera app
- **Android**: Press `a` in terminal or scan QR code with Expo Go app
- **Web**: Press `w` in terminal (limited functionality)

## Features
- **Service Organization**: Services grouped into collapsible sections
- **Drag & Drop**: Reorder both sections and individual services by holding the item until the opacity changes
- **Persistent State**: Order changes saved locally using AsyncStorage
- **Apple-Inspired UI**: Clean, minimal design
- **Expandable Sections**: Tap headers to show/hide services
- **Touch Optimized**: Proper hit targets and visual feedback

## Tradeoffs & Bugs
- **Mock Data**: Hardcoded service data rather than dynamic API integration
- **Gesture Conflicts**: Occasional conflicts between section and service dragging on slow devices or online emulators
- **Scrolling**: Sometimes scrolling can stop if the user accidentally pushes the service item

## Improvements
- **Search Functionality**: Add service search/filtering capability
- **Animations**: More sophisticated drag animations and transitions
- **UX**: Add visual indicators (drag handles, haptic feedback) to better communicate drag-and-drop functionality
