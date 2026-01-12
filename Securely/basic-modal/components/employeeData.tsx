import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import users from '../Data/peoples.js'
// import style from '../Css/styles.js'

export default function employeeData() {
const { width } = useWindowDimensions()
const styles = StyleSheet.create({
  profileImage: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: (width * 0.5) / 2, // Make it circular
  },
  personName: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  about: {
    fontSize: 12,
    color: 'gray',
  },
  employeeContainer: {
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#3d3d3d',
    paddingHorizontal: 5,
  },
});
  return (
    <View>
      <Text style={styles.heading}>Employees</Text>
      {users.map((item) => (
         <View key={item.uid} style={styles.employeeContainer}>
            <Image style={styles.profileImage} source={{uri: item.profileImage}} />
            <Text style={styles.personName}>
                {item.name}
            </Text>
            <Text style={styles.about}>
                {item.about}
            </Text>
            
         </View>
      ))}

    </View>
  )
}

