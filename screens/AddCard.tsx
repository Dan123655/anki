import { View, Text, TextInput, Button,TouchableOpacity } from "react-native";
import React from "react";
import { useLayoutEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import manageCards from "../store/cardManager";
import { observer } from "mobx-react-lite";
const AddCard = observer<any>(() => {
  const inputRef = useRef<any>(null);
  const [nameSubmitted, setNameSubmitted] = React.useState<boolean>(false);
  const [descSubmitted, setDescSubmitted] = React.useState<boolean>(false);
  const [newCardName, setNewCardName] = React.useState<string>("");
  const [newDesc, setNewDesc] = React.useState<string>("");
  const submitDesc = () => {
    manageCards.describeNew(newDesc);
    setDescSubmitted(true);

    inputRef.current.clear();
    console.log('newdesc usestaet: '+newDesc);
    console.log('new cardname usestaet'+newCardName)
  }

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    //card preview
    <View className="flex-1 items-center justify-center px-3 py-3  pt-20">
      <View className="bg-gray-800 w-[100%] min-h-[350px] max-h-[500px] rounded-[50px] flex-1 items-center justify-center">
        {!descSubmitted && (
          <View className="flex-row max-w-[90%]">
            <TextInput
              //width

              placeholderTextColor={"white"}
              maxLength={nameSubmitted ? 150 : 35}
              multiline={nameSubmitted && true}
              numberOfLines={nameSubmitted ? 8 : 1}
              className="border-b flex-auto border-gray-800 text-[32px] placeholder-white text-center w-64 "
              ref={inputRef}
              placeholder={`${
                nameSubmitted ? "What's on teh other side?" : "Enter an answer"
              }`}
              onChangeText={(text) => {
                !nameSubmitted && setNewCardName(text);
                nameSubmitted && setNewDesc(text);
              }}
              onSubmitEditing={(event: any) => {
                if (!nameSubmitted) {
                  manageCards.newName(event.nativeEvent.text);
                  setNameSubmitted(true);
                  inputRef.current.clear();
                }
                if (nameSubmitted) {

                  
                  // manageCards.saveCard();
                  // navigation.navigate("Home");
                }
              }}
            />
          </View>
        )}
        {descSubmitted && (
          <View className="flex-row max-w-[90%]">
          <Text className="font-semibold text-[24px] text-[#FFFFFF] text-center">
                {newDesc.toLocaleUpperCase()}
              </Text>
           
          </View>
        )}

      </View>
      {nameSubmitted &&!descSubmitted&&
        <>
        <TouchableOpacity
        className="bg-blue-500 h-12 w-32 rounded-[20px] mt-3 justify-center items-center"
          onPress={()=>submitDesc()}
      >
        <View className="flex-1 items-center justify-center h-auto w-auto">
          <Text className="text-center text-[24px] font-bold text-white">Next</Text>
        </View>
        </TouchableOpacity>
        </>
      }
    </View>
  );
 
});

export default AddCard;
