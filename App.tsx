
import React, { useEffect } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Chats from './screens/Chats/Index';
import Capture from './screens/Capture/Index';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"#fff"}
      />
      <SwiperFlatList>
        <View style={styles.child}>
          <Chats />
        </View>
        <View style={styles.child}>
          <Capture />
        </View>
      </SwiperFlatList>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  child: {
    width,
    justifyContent: 'center'
  }
});
