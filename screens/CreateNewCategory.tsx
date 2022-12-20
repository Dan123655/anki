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
    <View className='bg-slate-300 w-[100%] h-[100%] px-3 flex-1 justify-center items-center'>
            <Text className='font-bald text-[20px]  bottom-12  text-slate-800 mb-5'>Create new category</Text>

      <View
              className='bg-gray-200 w-40 h-40  rounded-[25px] mb-10 items-center justify-center'>
        
        <Text className=' text-[16px] text-center text-slate-700 font-semibold'>
          {newCategoryName.toLocaleUpperCase()}
      </Text>
      </View>
      {/* input */}
      <>
      <Text className='text-[12px] top-1 right-28 z-10'>Name</Text>

      <TextInput
        className='bg-gray-200 w-[80%] h-[40px] rounded-[25px] text-[16px] mb-10 text-center text-slate-700 font-semibold px-3'
        placeholder='Enter category name'
        placeholderTextColor='slate-500'
        onChangeText={(text) => handleInput(text)}
        />
        </>
      {/* button */}
      <TouchableOpacity
        onPress={() => {
          manageCards.addCategory(newCategoryName)
          //@ts-expect-error
          navigation.navigate('Home')
        }}
        className='bg-slate-400 h-12 w-24 rounded-full justify-center items-center'>
        <Text className=' text-[18px] text-center text-slate-700 font-semibold'>Save</Text>
        </TouchableOpacity>

        
      </View>
      




  )
}

export default CreateNewCategory