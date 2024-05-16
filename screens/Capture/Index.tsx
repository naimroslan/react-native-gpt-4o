import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return(
    <View>
      <Text style={styles.text}>
        Capture
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#000'
  }
})