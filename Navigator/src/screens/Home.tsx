import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React from 'react';
import { storeData } from '../storeData';
import Card from '../components/Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';


type HomeProps = NativeStackScreenProps<rootStackParamList, "Home">
export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <FlatList 
      numColumns={1}
      data={storeData} 
      keyExtractor={item=> item.product_id.toString()}
      renderItem={({item})=>(
        <Pressable
         onPress={ ()=> navigation.navigate('Information', {product: item})}
        >
          <Card {...item}/>
        </Pressable>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
