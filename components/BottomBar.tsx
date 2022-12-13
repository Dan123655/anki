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
      <View className='flex-row justify-between w-[100%] h-16 bottom-0 items-center bg-black'>

        <TouchableOpacity
          className=" p-3 rounded-[20px] h-12 w-32 items-center justify-center"
          onPress={() => {
            //@ts-expect-error
            navigation.navigate("Slideshow");
            console.log("Button pressed!");
          }}
        >
          <FontAwesome name="play-circle" size={24} color="white" />
        </TouchableOpacity>


        <TouchableOpacity
          className=" p-3 rounded-[20px] h-12 w-32 items-center justify-center"
          onPress={() => {
            //@ts-expect-error
            navigation.navigate("AddCard");
            console.log("Button pressed!");
          }}
        >
          <FontAwesome5 name="plus" size={24} color="white" />
        </TouchableOpacity>


        <TouchableOpacity
          className=" p-3 rounded-[20px] h-12 w-32 items-center justify-center"
          onPress={() => {
            //@ts-expect-error
            navigation.navigate("AddCard");
            console.log("Button pressed!");
          }}
        >
          <FontAwesome name="sticky-note-o" size={24} color="white" />
        </TouchableOpacity>

      </View>
    )
  }

export default BottomBar