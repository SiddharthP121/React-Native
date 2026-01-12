import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../Css/styles';

export default function flatCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={style.heading}>Flat Cards</Text>
      </View>
      <View style={style.container}>
        <View style={[flatStyles.redBox, style.box]} />
        <View style={[flatStyles.greenBox, style.box]} />
        <View style={[flatStyles.blueBox, style.box]} />
      </View>
    </SafeAreaView>
  );
}

const flatStyles = StyleSheet.create({
  redBox: {
    backgroundColor: 'red',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
});
