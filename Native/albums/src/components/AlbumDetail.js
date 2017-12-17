import React from 'react';
import { Text, View, Image, Linking } from 'react-native'; // ini bisa di lihat di web react-native
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// penulisannya beda bisa dilihat di video folder 8 ke 46
const AlbumDetail = ({ album }) => { // tadinya album itu props, biar singkat aja
  const { title, artist, thumbnail_image, image, url } = album; // untuk menyingkat props gitu aja
  const { 
    headerContentStyle, 
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
   } = styles; // untuk menyingkat styles gitu aja

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle} 
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={imageStyle}
          source={{ uri: image }} 
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
// untuk tes button bisa menggunakan  <Button onPress={() => console.log(title)} />
// untuk mengubah teks button bisa dengan  <Button onPress={() => Linking.openURL(url)} teks="Buy Now" />
// tetapi di sini bisa dengan melempar props ke Button.js
// dengan menambah children pada const button.
const styles = {
  headerContentStyle: {
    flexDirection: 'column', // menampilkan text sebagai kolom bukan baris
    justifyContent: 'space-around' // ada jarak antara textnya
  },
  headerTextStyle: {
    fontSize: 18 // untuk modifikasi ukuran text
  },
  thumbnailStyle: {
    height: 50, // harus di set tinggi dan lebarnya agar muncul di layar
    width: 50 // karena ini adalah react-native 
  },
  thumbnailContainerStyle: {
    justifyContent: 'center', // untuk set isi dari agar tengah
    alignItems: 'center', // tengah
    marginLeft: 10, // ada jarak 10 di kiri image
    marginRight: 10 // ada jarak 10 di kanan image
  },
  imageStyle: {
    height: 300,
    flex: 1, // untuk memastikan lebar gambar penuh dengan width: null
    width: null
  }
};

export default AlbumDetail;