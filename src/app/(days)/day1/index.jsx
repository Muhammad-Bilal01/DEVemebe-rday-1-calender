import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Day() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontSize: 32, fontFamily: "Inter" }}>Devember Day 1 </Text>
    </View>
  );
}
