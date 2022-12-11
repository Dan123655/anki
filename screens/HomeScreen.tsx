import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import manageCards from '../store/cardManager';
import { observer } from 'mobx-react-lite';
const HomeScreen = observer<any>(() =>
{
    const [tapped, setTapped] = React.useState<boolean>(false);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        });
        console.log('irerendered myself')
    }, [manageCards.myCards]);
    return (
        <View className="flex-1 bg-white-400 flex-row px-3 py-3 justify-center">
            {/* {manageCards.myCards.length != 0 && */}
              
              
              

            {manageCards.myCards.length>0&&


              
                < TouchableOpacity onPress={() => setTapped(!tapped)} className="bg-gray-800 max-w-[80%] mt-48 h-80 rounded-[20px] flex-1 items-center justify-center">
            <View className='flex-row max-w-[90%]'>

                {tapped && <Text className='font-semibold text-[32px] text-[#FFFFFF]'>
                    {manageCards.myCards[0]
                        //@ts-expect-error
                        .name?.toLocaleUpperCase()}</Text>}
                { !tapped && <Text className='font-semibold text-[24px] text-[#FFFFFF]  text-center'>
                    {manageCards.myCards[0]
                        //@ts-expect-error
                        .description?.toLocaleUpperCase()}</Text>}

            </View>
                  
        </TouchableOpacity>
}
              
              
          
   {/* } */}
      <TouchableOpacity
        className="bg-gray-800 p-3 rounded-[20px] h-16 w-32 items-center justify-center absolute bottom-12"
        onPress={() => {
          //@ts-expect-error
          navigation.navigate("AddCard");
          console.log("Button pressed!");
        }}
      >
        <FontAwesome5 name="plus" size={24} color="white" />
      </TouchableOpacity>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}
)


export default HomeScreen;