import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { ActivityIndicator } from "react-native";

function RootLayout() {
  // Google Fonts
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator size="large" color="#9b4521" />;
  }

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}

export default RootLayout;
