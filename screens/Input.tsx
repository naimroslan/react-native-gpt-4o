import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

import caretUp from "../assets/icons/caretUp.png"

export default function Input({ handleResponse }: { handleResppmse: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    console.log('Sending message:', text);
    if (text.trim() !== '') {
      handleResponse(text)
      setText(''); // clear the input field after sending
    }
  }

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder="Got questions? Fire away!"
        placeholderTextColor='#b8b8b8'
        keyboardType="default"
        returnKeyType='done'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.sendContainer} onPress={handleSend}>
        <Image source={caretUp} style={styles.caretUp}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: -40,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#000",
    color: "#fff",
  },
  sendContainer: {
    width: "15%",
    height: "65%",
    backgroundColor: "transparent",
    borderRadius: 60,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15  
  },
  caretUp: {
    width: 35,
    height: 35
  }
})