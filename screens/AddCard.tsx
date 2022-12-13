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
  const [color, setColor] = React.useState<string>("bg-slate-800");
  const[text,setText] = React.useState<string>("white")
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
    <View className="flex-1 items-center mt-10 px-3 py-3  pt-20">
      <View className={`${color} w-[100%] min-h-[350px] max-h-[420px] rounded-[50px] flex-1 items-center justify-center`}>
        {!descSubmitted && (
          <View className="flex-row max-w-[90%]">
            <TextInput
              //width

              placeholderTextColor={"white"}
              maxLength={nameSubmitted ? 150 : 35}
              multiline={nameSubmitted && true}
              numberOfLines={nameSubmitted ? 8 : 1}
              className={`border-b flex-auto border-gray-800 text-[32px] placeholder-${text} text-center w-64`}
              ref={inputRef}
              placeholder={`${
                nameSubmitted ? "Type the question" : "Type the answer"
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
            <Text className={`font-semibold text-[32px] text-${text} text-center`}>
                {newCardName.toLocaleUpperCase()}
              </Text>
           
          </View>
        )}

      </View>
      {nameSubmitted &&!descSubmitted&&
        <>
        <TouchableOpacity
        className="bg-slate-600 h-16 w-40 rounded-full justify-center items-center mt-7"
          onPress={()=>submitDesc()}
      >
        <View className="flex-1 items-center justify-center h-auto w-auto">
          <Text className="text-center text-[24px] font-bold text-white">Next</Text>
        </View>
        </TouchableOpacity>
        </>
      }

{/* //color choice */}

      {descSubmitted && 
        <>
        <View className="flex-row items-center justify-between px-4 bg-slate-200 rounded-full h-16 w-[95%] mt-5">
          <TouchableOpacity className="bg-orange-500 h-10 w-10 rounded-full" onPress={() => {setColor('bg-orange-500'); manageCards.color(color)  }}></TouchableOpacity>
          <TouchableOpacity className="bg-red-600 h-10 w-10 rounded-full" onPress={() => { setColor('bg-red-600') ; manageCards.color(color)}}></TouchableOpacity>
          <TouchableOpacity className="bg-slate-900 h-10 w-10 rounded-full" onPress={() => { setColor('bg-slate-900') ; manageCards.color(color)}}></TouchableOpacity>
          <TouchableOpacity className="bg-sky-500 h-10 w-10 rounded-full" onPress={() => { setColor('bg-sky-500'); manageCards.color(color) }}></TouchableOpacity>
          <TouchableOpacity className="bg-lime-500 h-10 w-10 rounded-full" onPress={() => { setColor('bg-lime-500'); manageCards.color(color) }}></TouchableOpacity>
          <TouchableOpacity className="bg-fuchsia-500 h-10 w-10 rounded-full" onPress={() => { setColor('bg-fuchsia-500') ; manageCards.color(color)}}></TouchableOpacity>
          
        </View>
        <View className="flex-row items-center justify-between bg-slate-200 rounded-full h-16 w-[95%] mt-5">
          <TouchableOpacity className="bg-slate-200 h-16 w-[50%] rounded-l-full justify-center items-center" onPress={() => { setText('black'); manageCards.text('black')}}>
            <Text className="text-center text-black text-[20px]">Text</Text>
        </TouchableOpacity>
          <TouchableOpacity className="bg-slate-600 h-16 w-[50%] rounded-r-full justify-center items-center" onPress={() => {setText('white'); manageCards.text('black')}}>
            <Text className="text-center text-white text-[20px]">Text</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-slate-600 h-16 w-40 rounded-full justify-center items-center mt-7" onPress={() => {
          //@ts-expect-error
          manageCards.saveCard(); navigation.navigate("Home");
        }}>
            <Text className="text-center text-white text-[20px]">Save</Text>
          </TouchableOpacity>
        </>
            }
    </View>
  );
 
});

export default AddCard;
