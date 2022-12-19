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




  const forEditing = route?.params?.forEditing ? route?.params?.forEditing:false



    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        });
    }, [manageCards.myCards]);
 
  

    
  return (
      <View className="flex-1 bg-slate-300 ">
          <Text className=' text-[18px] text-center text-slate-700 font-semibold mt-10'>Select a category for your flashcard</Text>
      <ScrollView>
   <View className=' mt-8 flex-row items-center justify-evenly flex-wrap'>
   
         {manageCards.listOfCategories.map((item: any,index) => {
             return (
               <TouchableOpacity key={index} onPress={() => {
                 if (forEditing) {
                   forEditing.category = item
                   //@ts-expect-error
                   navigation.navigate('Editor', { forEditing: forEditing })
    
                 }
                 else {
                   //@ts-expect-error
                   navigation.navigate('Editor', { param: { category: item } })
           
                 }
               }}
                    className='bg-gray-200 w-40 h-40 my-2 rounded-[25px] items-center justify-center'>
                 <Text className=' text-[16px] text-center text-slate-700 font-semibold'>{item.toLocaleUpperCase()}</Text>
                 <Text className="top-8 text-slate-500">{manageCards.myCards.filter((card) => card.category === item).length}</Text>
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


// import { useNavigation } from '@react-navigation/native';

// function MyScreen() {
//   const navigation = useNavigation();

//   function handleGoBack() {
//     navigation.reset({
//       index: 0,
//       routes: [
//         { name: 'Home' },
//       ],
//     });
//   }

//   return (
//     <View>
//       <TouchableOpacity onPress={handleGoBack}>
//         <Text>Go back to home screen and reset stack</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// In this example, the reset action is triggered when the user taps the TouchableOpacity component. This will navigate to the Home screen and reset the navigation stack, so that the user can't go back to the previous screen by pressing the back button.

// You can also pass additional options to the reset action, such as the initial route params or the screen options for the new route. For more information, you can refer to the reset action documentation in the React Navigation documentation.

