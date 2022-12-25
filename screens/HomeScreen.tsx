import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity,ScrollView } from "react-native";
import manageCards from '../store/cardManager';
import { observer } from 'mobx-react-lite';
import Category from "../components/Category";
import BottomBar from "../components/BottomBar";
import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = observer<any>(({route }) =>
{
  const recentlyUpdatedCategory:string|false = route?.params?.param?.recentlyUpdatedCategory ? route.params.param.recentlyUpdatedCategory : false
  const [cards, setCards] = React.useState<boolean>(true);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        });
    }, [manageCards.myCards]);
 
  return (
    <View className="flex-1 bg-slate-300 ">
      <ScrollView>
   <View className=' mt-8 flex-row items-center justify-evenly flex-wrap'>
   
          {manageCards.listOfCategories.map((item: any, i) => {

            return (<>
              <View>
              <Text className="left-[75px] top-36 z-10 text-slate-500"> {manageCards.myCards.filter((card) => card.category === item).length}</Text><Category
                categoryName={item}
                key={manageCards.myCards.filter((card) => card.category === item).length}
               
              />
              </View>
              {i == manageCards.listOfCategories.length - 1 && 
                <TouchableOpacity 
                  key='key'
                  //@ts-expect-error
                  onPress={() => { navigation.navigate("Slideshow", { param: category}); console.log("currently editin cat: "+category)}}
            
                  className='bg-gray-300 w-40 h-40 my-2 rounded-[25px] items-center justify-center'>
                  <TouchableOpacity className='bg-gray-200 w-20 h-20 my-2 top-3 rounded-full items-center justify-center'
                  onPress={() =>
                      
                      navigation.navigate("NewCategory")}>

                  <FontAwesome className="top-[100px]" name="plus" size={20} color="gray" onPress={() =>
                      
                    //@ts-expect-error
                      navigation.navigate("NewCategory")} />
                    </TouchableOpacity>
                      </TouchableOpacity>}
             </>
           );
          })}


          

      </View>
    </ScrollView>
      <BottomBar/>
      </View>
  );
}
)


export default HomeScreen;
