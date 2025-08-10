import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from "../constants/Colors";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            title: "Services",
            headerStyle: { backgroundColor: Colors.background.primary },
            headerTintColor: Colors.text.primary,
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
