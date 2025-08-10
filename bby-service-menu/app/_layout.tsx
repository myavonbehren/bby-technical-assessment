import { Stack } from "expo-router";
import Colors from "../constants/Colors";

export default function RootLayout() {
  return (
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
  );
}
