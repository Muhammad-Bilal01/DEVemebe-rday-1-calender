import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import DayListItem from "../Components/core/DayListItem";
// import * as SplashScreen from "expo-splash-screen";

const days = [...Array(24)].map((e, i) => i + 1);

// SplashScreen.preventAutoHideAsync();

export default function App() {
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
