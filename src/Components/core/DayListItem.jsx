import { View, Text, StyleSheet } from "react-native";

function DayListItem({ day }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
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
