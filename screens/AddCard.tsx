import { View, Text ,TextInput,} from 'react-native'
import React from 'react'
import { useLayoutEffect,useRef  } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import manageCards from '../store/cardManager';
import { observer } from 'mobx-react-lite';
const AddCard = observer<any>(() => {
  const inputRef = useRef<any>(null);
  const [nameSubmitted, setNameSubmitted] = React.useState<boolean>(false);
  const [descSubmitted, setDescSubmitted] = React.useState<boolean>(false);
  const [newCardName, setNewCardName] = React.useState<string>('');
  const [newDesc, setNewDesc] = React.useState<string>('');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
//card preview
    <View className='flex-1 items-center justify-center px-3 py-3  pt-20'>
      <View className='bg-gray-800 w-[100%] h-80 rounded-[20px] flex-1 items-center justify-center'>
        <View className='flex-row max-w-[90%]'>
          {!nameSubmitted&&<Text className='font-semibold text-[32px] text-[#FFFFFF]'>{newCardName.toLocaleUpperCase()}</Text>}
          {nameSubmitted&&<Text className='font-semibold text-[32px] text-[#FFFFFF] text-center'>{newDesc.toLocaleUpperCase()}</Text>}
        </View>
   
      </View>
      {/*card details*/}
      {
        nameSubmitted &&
        <View className='flex-1 justify-center pb-4 max-h-32 items-center'>
            <Text className='text-[24px] text-gray-600'> card:</Text>
            <Text className='text-[32px] font-semibold text-gray-800 '> { manageCards.newCardNameInput.toLocaleUpperCase()}</Text>
      </View>}

 {/*card name input*/}
      <View className='flex-1 items-center justify-center font-semibold'>
        <TextInput
          className='border-b border-gray-800 text-xl'
          ref={inputRef}
          placeholder={`${nameSubmitted ? "What's on teh other side?" : "Enter card name"}`}
          
          onChangeText={(text) => {
            !nameSubmitted && setNewCardName(text)
            nameSubmitted && setNewDesc(text)
          }}
         
         
         
         
          onSubmitEditing={
            (event: any) => {
            
            
              if (!nameSubmitted) {
                manageCards.newName(event.nativeEvent.text);
                setNameSubmitted(true);
                inputRef.current.clear();

              }
              if (nameSubmitted){
    
                  manageCards.describeNew(event.nativeEvent.text);
                  setDescSubmitted(true);
                inputRef.current.clear(); 
                manageCards.saveCard()
                //@ts-expect-error
                navigation.navigate('Home')
                }

            }

            }
        
        
        
        
        />
        </View>
      </View>

  )
}
)

export default AddCard