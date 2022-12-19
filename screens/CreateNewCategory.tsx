import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import manageCards from '../store/cardManager'
import { observer } from 'mobx-react-lite';





function CreateNewCategory() {
  const navigation = useNavigation();
  const[newCategoryName, setNewCategoryName] = React.useState<string>('')
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },);
  
  const handleInput = (text: any) => {
    setNewCategoryName(text)



  }









  return (
    <View className='bg-red-400 w-[100%] h-[100%] py-10 px-3 flex-1 justify-center items-center'>
      <Text>create new category name</Text>
      <Text className='text-[25px] font-bold mt-10 mb-8' >{ newCategoryName}</Text>
      {/* input */}
      <TextInput
        className='bg-gray-200 w-[80%] h-[40px] rounded-[25px] text-[16px] text-slate-700 font-semibold px-3'
        placeholder='Enter category name'
        placeholderTextColor='gray'
        onChangeText={(text) => handleInput(text)}
      />
      {/* button */}
      <TouchableOpacity
        onPress={() => {
          manageCards.addCategory(newCategoryName)
          //@ts-expect-error
          navigation.navigate('Home')
        }}
        className='bg-slate-500 h-12 w-24 rounded-full justify-center items-center mt-4'>
        <Text className=' text-[16px] text-center text-slate-700 font-semibold'>CREATE</Text>
        </TouchableOpacity>

        
      </View>
      




  )
}

export default CreateNewCategory