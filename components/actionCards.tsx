import { StyleSheet, Text, View, Image, Linking, Alert, TouchableOpacity, useWindowDimensions} from 'react-native'
import React from 'react'
import style from '../Css/styles'


export default function actionCards() {
  const { width } = useWindowDimensions();
  const handleFollow = async (link: string) => {
    try {
      await Linking.openURL(link);
    } catch (error) {
      Alert.alert("Error encountered", error instanceof Error ? error.message : "Failed to open the link")
    }
    
  }
  
  const styles = StyleSheet.create({
    imageContainer: {
      backgroundColor: 'white',
      alignItems: 'center',
    },
    elevatedImage: {
      width: width * 0.9,
      height: (width * 0.9) * (420 / 380), // Maintain aspect ratio
      borderRadius: 10,
    },
    elevatedCardContainer: {
      padding: 5,
      borderRadius: 10,
      backgroundColor: 'brown',
      width: width * 0.95,
      alignSelf: 'center',
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
    followButton: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    followButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  
  return (
    <View>
      <Text style={style.heading}>Action Cards</Text>
      <View style={style.container}>
        <View style={styles.elevatedCardContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../Assets/profile.jpeg')}
              style={styles.elevatedImage}
            />
          </View>
          <View style={styles.elevatedTextContainer}>
            <Text style={[styles.elevatedText, styles.title]}>
              Follow me on Instagram 👇
            </Text>
            <Text style={[styles.elevatedText, styles.subtitle]}>
              Hello, Name is Siddharth. Please checkout my profile.
            </Text>

            <TouchableOpacity
              onPress={() =>
                handleFollow('https://www.instagram.com/siddharth_wd/?__pwa=1')
              }
              style={styles.followButton}
              accessibilityLabel="Follow on Instagram"
              accessibilityHint="Opens Instagram profile in browser or app"
            >
              <Text style={styles.followButtonText}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}