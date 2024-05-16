import { StyleSheet, View } from "react-native"

import Title from "../../components/Chats/Title"
import Chats from "../../components/Chats/Chats"


export default function Index() {
  return(
    <View style={styles.container}>
      <Title />
      <Chats />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
