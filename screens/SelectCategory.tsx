import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity,ScrollView } from "react-native";
import manageCards from '../store/cardManager';
import { observer } from 'mobx-react-lite';
import Category from "../components/Category";
import BottomBar from "../components/BottomBar";
const SelectCategory = observer<any>(({ route }) =>
{

const slideEditingData = route?.params?.forEditing

  const [cards, setCards] = React.useState<boolean>(true);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        });
    }, [manageCards.myCards]);
 
  return (
      <View className="flex-1 bg-slate-300 ">
          <Text className=' text-[16px] text-center text-slate-700 font-semibold mt-10'>Select a category for your flashcard</Text>
      <ScrollView>
   <View className=' mt-8 flex-row items-center justify-evenly flex-wrap'>
   
         {manageCards.listOfCategories.map((item: any,index) => {
             return (
                 //@ts-expect-error
                 <TouchableOpacity key={index} onPress={() => navigation.navigate('Editor', { param: { category: item } })}
                    className='bg-gray-200 w-40 h-40 my-2 rounded-[25px] items-center justify-center'>
                     <Text className=' text-[16px] text-center text-slate-700 font-semibold'>{ item}</Text>
                </TouchableOpacity>
           );
          })}


          

      </View>
    </ScrollView>
      <BottomBar/>
      </View>
  );
}
)


export default SelectCategory;
