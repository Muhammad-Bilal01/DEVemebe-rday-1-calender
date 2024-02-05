import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Day() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2" }} />
      <Text style={{ fontSize: 32, fontFamily: "Inter" }}>Devember Day 2 </Text>
    </View>
  );
}
