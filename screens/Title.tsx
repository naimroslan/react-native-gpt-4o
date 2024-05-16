import { StyleSheet, Text, View } from "react-native"

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>01</Text>
      <Text style={styles.text}>Chats</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    alignItems: "flex-start"
  },
  index: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 32
  },
  text: {
    color: "#000",
    fontSize: 40,
    fontWeight: "600",
    marginLeft: 4
  }
})