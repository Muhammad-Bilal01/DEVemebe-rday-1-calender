import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import DayListItem from "./src/Components/core/DayListItem";
import { useEffect } from "react";
// import * as SplashScreen from "expo-splash-screen";

const days = [...Array(24)].map((e, i) => i + 1);

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // Google Fonts
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator size="large" color="#9b4521" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: { gap: 10 },
});
