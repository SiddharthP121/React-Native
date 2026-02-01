import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { rootStackParamList } from '../App'

type InfoType = NativeStackScreenProps<rootStackParamList, 'Information'>

export default function Info({navigation, route}: InfoType) {
  const { product } = route.params
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri:product.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.model}>{product.model}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountPrice}>{product.discounted_price_inr}</Text>
          <Text style={styles.actualPrice}>{product.actual_price_inr}</Text>
        </View>
        <Text style={styles.specs}>{product.specifications}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
         onPress={() => Linking.openURL(product.buy_link)}>
          <Text style={styles.buttonText}>
            Buy at {product.discounted_price_inr}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '150%',
    height: 300,
    resizeMode: 'cover',
    aspectRatio: 1
  },
  detailsContainer: {
    padding: 20,
  },
  model: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  discountPrice: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginRight: 12,
  },
  actualPrice: {
    fontSize: 18,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  specs: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  buttonContainer: {
    padding: 20,
    paddingTop: 0,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})