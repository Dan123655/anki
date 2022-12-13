import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, TouchableOpacity,ScrollView } from "react-native";
import manageCards from '../store/cardManager';
import { observer } from 'mobx-react-lite';
import { myCard } from "../types/typesImport";
import cardManager from "../store/cardManager";
import Card from "../components/Card";
import BottomBar from "../components/BottomBar";
const HomeScreen = observer<any>(() =>
{
    const [cards, setCards] = React.useState<boolean>(true);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        });
    }, [manageCards.myCards]);
  return (
    <>
    <View className="flex-1 bg-white-400 flex-col pt-3 bg-white justify-center items-center">
    <ScrollView className="mt-4 w-[100%]">
    <View className="flex-1 items-center mx-3 justify-center">
          
        {manageCards.myCards.map((card, key) => {

          return <Card key={key} id={card.id} name={card.name} description={card.description} color={card.color} text={ card.text} />

        })}

          </View>

        </ScrollView>

      {/* <StatusBar style="auto" hidden={true} /> */}
      </View>
      <BottomBar/>
    </>
  );
}
)


export default HomeScreen;