import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5,FontAwesome } from '@expo/vector-icons'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const BottomBar = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    })
  }, []);
    return (
      <View className='flex-row justify-between w-[100%] h-12 bottom-0 items-center bg-slate-200'>

        <TouchableOpacity
          className=" p-3 rounded-[20px] h-12 w-32 items-center justify-center"
          onPress={() => {

            navigation.navigate("Slideshow")
          }}
        >
          <FontAwesome name="play-circle" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity
          className=" p-3 rounded-[20px] h-12 w-32 items-center justify-center"
          onPress={() => {

            navigation.navigate("SelectCategory")
          }}
        >
          <FontAwesome5 name="plus" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity
          className=" p-3 rounded-[20px] h-12 w-32 items-center justify-center"

        >
          <FontAwesome name="gear" size={24} color="black" />
        </TouchableOpacity>

      </View>
    )
  }

export default BottomBar