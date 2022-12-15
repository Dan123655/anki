import { View, Text,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import manageCards from '../store/cardManager'
const Category = ({ categoryName }: { categoryName: string }) => {
  const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        });
    }, [manageCards.myCards]);
 
  const category = categoryName;
  
  return (

    <TouchableOpacity 
      //@ts-expect-error
      onPress={() => { navigation.navigate("Slideshow", { param: category}); console.log("currently editin cat: "+category)}}

        className='bg-gray-200 w-40 h-40 my-2 rounded-[25px] items-center justify-center'>
        
              <Text className=' text-[16px] text-center text-slate-700 font-semibold'>
        {category.toLocaleUpperCase() }
              </Text>
          </TouchableOpacity>
          
  )
}

export default Category