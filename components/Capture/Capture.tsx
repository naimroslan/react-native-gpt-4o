import { StyleSheet, Text, View } from "react-native";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";

export default function Capture() {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device = useCameraDevice('back')

  return(
    <View style={styles.cameraContainer}>
      <View style={styles.container}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: "85%",
    width: "100%"
  }
})