import { Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
function DayListItem({ day }) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
  },
  text: {
    fontSize: 72,
    fontFamily: "Inter",
    color: "#9b4521",
  },
});

export default DayListItem;
