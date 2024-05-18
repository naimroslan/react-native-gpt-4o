import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Capture/Title";
import Capture from "../../components/Capture/Capture";


export default function Index() {
  return(
    <View style={styles.container}>
      <Title />
      <Capture />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})