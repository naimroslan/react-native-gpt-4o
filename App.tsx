
import React, { useEffect } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import Chats from './screens/Chats/Index';
import Capture from './screens/Capture/Index';

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
  },
  child: {
    width,
    justifyContent: 'center',
    padding: 20
  }
});
