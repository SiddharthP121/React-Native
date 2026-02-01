import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type cardProps = PropsWithChildren<{
  model: string;
  actual_price_inr: string;
  discounted_price_inr: string;
  image: string;
  specifications: string;
}>;

export default function Card(props: cardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.image}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.model}>{props.model}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountPrice}>{props.discounted_price_inr}</Text>
          <Text style={styles.actualPrice}>{props.actual_price_inr}</Text>
        </View>
        <Text style={styles.specs}>{props.specifications}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    marginTop: 4,
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginRight: 10,
  },
  actualPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  specs: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
})