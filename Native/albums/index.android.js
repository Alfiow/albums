// import a library to help creacte component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
// style flex: 1 dibawah sebenarnya berguna agar scrollnya bisa sampai bawah
// karena di video tanpa ini tidak bisa scrool , karena gotca(mungkin bug) pada react-native
// yang pada saat kode ini ditulis bug sudah tidak ada
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

// Render it to the device

AppRegistry.registerComponent('albums', () => App);
