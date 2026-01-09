import { StyleSheet,ScrollView, Text, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import style from '../Css/styles';

export default function elevatedCards() {
  const { width } = useWindowDimensions()
  const styles = StyleSheet.create({
    imageContainer: {
      backgroundColor: 'white',
    },
    elevatedImage: {
      width: width * 0.9,
      height: (width * 0.9) * (420/380),
      borderRadius: 10,
    },
    elevatedCardContainer: {
      padding: 5,
      borderRadius: 10,
      backgroundColor: 'black',
    },
    elevatedText: {
      color: 'white',
    },
    elevatedTextContainer: {
      padding: 5,
      margin: 5,
      borderBlockColor: 'white',
    },
    title: { fontSize: 22, fontWeight: 'bold', paddingBottom: 6 },
    subtitle: {
      fontSize: 14,
      paddingBottom: 6,
      color: 'wheat',
    },
    description: {
      fontSize: 12,
      color: 'gray',
    },
  });
  return (
    <ScrollView>
      <View>
        <Text style={style.heading}>Elevated Cards</Text>
        <View style={style.container}>
          <View style={styles.elevatedCardContainer}>
            <View>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/161293/prambanan-temple-java-hinduism-161293.jpeg',
                }}
                style={styles.elevatedImage}
              />
            </View>
            <View style={styles.elevatedTextContainer}>
              <Text style={[styles.elevatedText, styles.title]}>
                Majestic Spires of Prambanan
              </Text>
              <Text style={[styles.elevatedText, styles.subtitle]}>
                A Timeless Tribute to Hindu Architecture in Central Java
              </Text>
              <Text style={[styles.elevatedText, styles.description]} numberOfLines={4}>
                Nestled in the heart of Central Java, Indonesia, the Prambanan
                Temple complex stands as a breathtaking testament to ancient
                Hindu artistry and devotion. Dominated by the towering central
                temple dedicated to Shiva, and flanked by shrines honoring
                Vishnu and Brahma, the site showcases intricate stone carvings
                and soaring spires that echo centuries of spiritual reverence.
                The pathway leading to the temples is adorned with smaller
                statues and structures, all set within a meticulously preserved
                landscape. Recognized as a UNESCO World Heritage Site, Prambanan
                is not only a cultural landmark but also a living chronicle of
                Indonesia’s rich religious and architectural heritage.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


