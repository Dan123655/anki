import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useLayoutEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import manageCards from "../store/cardManager";
import { observer } from "mobx-react-lite";

const Editor = observer<any>(({ route }) => {

  const navigation = useNavigation<any>();
  const editing: any = route?.params?.forEditing && route.params.forEditing
  const adding: any = route?.params?.param?.category && route.params.param.category

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const inputRef = useRef<any>(null);
  const [category, setCategory] = React.useState<string>(
    editing?.category ? editing.category
      : adding ? adding : "Math");
  manageCards.toCategory(category);
  const [nameSubmitted, setNameSubmitted] = React.useState<boolean>(false);
  const [descSubmitted, setDescSubmitted] = React.useState<boolean>(false);
  const [newCardName, setNewCardName] = React.useState<string>(
    editing?.name || ""
  );
  const [newDesc, setNewDesc] = React.useState<string>(
    editing?.description || ""
  );
  const [color, setColor] = React.useState<string>(
    editing?.color || "bg-slate-800"
  );
  const [text, setText] = React.useState<string>(editing?.text || "white");
  const [addingToCategory, setAddingToCategory] = React.useState<boolean>(route?.params?.param?.category?true:false);
  const submitDesc = () => {
    manageCards.describeNew(newDesc);
    setDescSubmitted(true);
    inputRef.current.clear();

  };
  const submitName = () => {
    manageCards.newName(newCardName);
    setNameSubmitted(true);
    inputRef.current.clear();
  };

    return (
<>
      <View className="flex-1 items-center justify-between mt-8 px-3 py-3  pt-8">
        <View
          className={`${color} w-[100%] min-h-[250px] max-h-[420px] rounded-[50px] flex-1 items-center justify-center`}
        >

          {!nameSubmitted ? (
            <View className="flex-row w-[90%] items-center text-center justify-center">
              <Text
                className={`font-semibold text-[40px] text-${text} text-center`}
              >
                {newCardName.toLocaleUpperCase()}
              </Text>
            </View>
          ) : (

            !descSubmitted && (
              <View className="flex-row w-[90%] items-center text-center justify-center">
                <Text
                  className={`font-semibold text-[32px] text-${text} text-center`}
                >
                  {newDesc.toLocaleUpperCase()}
                </Text>
              </View>
            )
          )}
          {descSubmitted && (
            <View className="flex-row max-w-[90%]">
              <Text
                className={`font-semibold text-[40px] text-${text} text-center`}
              >
                {newCardName.toLocaleUpperCase()}
              </Text>
            </View>
          )}
        </View>



        {!nameSubmitted && <Text className="w-[100%] text-[20px] text-center mt-3">
          What would the
          <Text className="font-bold"> hidden </Text>
          side say?</Text>}
      
        {nameSubmitted ? !descSubmitted && <Text className="w-[100%] text-[20px] text-center mt-3">
          What would the
          <Text className="font-bold"> front </Text>
          side say?</Text> : <></>}


      





      
        {!descSubmitted && (
          <>
            
            <View className="flex-1  mt-4 h-[100px] w-[100%] px-5">
            <Text className='text-[12px] w-[20px] font-semibold text-center rounded-[5px]  top-[0px] left-[16px]   text-slate-400 z-10'>text</Text>
              <TextInput
                defaultValue={
                  !nameSubmitted
                    ? editing?.name || newCardName
                    : editing?.description || newDesc
                }
            
                placeholderTextColor={"gray"}
                
                maxLength={nameSubmitted ? 150 : 35}
                multiline={nameSubmitted && true}
                numberOfLines={nameSubmitted ? 8 : 1}
                className={`flex-auto border-solid border-[1px]  w-[100%] border-slate-400 text-[18px] rounded-[20px] px-1 placeholder-slate-900 text-center max-h-[190px]`}
                ref={inputRef}
                placeholder={`${nameSubmitted ? "Type the front text" : "Type the hidden text"
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

                  }
                }}
              />
            </View>
          </>
        )}


        {descSubmitted && (
          <>
            <View className="flex-row items-center justify-between px-4 bg-slate-200 rounded-full h-16 w-[95%] mt-5">
              <TouchableOpacity
                className="bg-orange-500 h-10 w-10 rounded-full"
                onPress={() => {
                  setColor("bg-orange-500");
                  manageCards.color("bg-orange-500");
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                className="bg-red-600 h-10 w-10 rounded-full"
                onPress={() => {
                  setColor("bg-red-600");
                  manageCards.color("bg-red-600");
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                className="bg-slate-900 h-10 w-10 rounded-full"
                onPress={() => {
                  setColor("bg-slate-900");
                  manageCards.color("bg-slate-900");
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                className="bg-sky-500 h-10 w-10 rounded-full"
                onPress={() => {
                  setColor("bg-sky-500");
                  manageCards.color("bg-sky-500");
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                className="bg-lime-500 h-10 w-10 rounded-full"
                onPress={() => {
                  setColor("bg-lime-500");
                  manageCards.color("bg-lime-500");
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                className="bg-fuchsia-500 h-10 w-10 rounded-full"
                onPress={() => {
                  setColor("bg-fuchsia-500");
                  manageCards.color("bg-fuchsia-500");
                }}
              ></TouchableOpacity>
            </View>
            <View className="flex-row items-center justify-between bg-slate-200 rounded-full h-14 w-[95%] mt-5">
              <TouchableOpacity
                className="bg-slate-200 h-14 w-[50%] rounded-l-full justify-center items-center"
                onPress={() => {
                  setText("black");
                  manageCards.text("black");
                }}
              >
                <Text className="text-center text-black text-[20px]">Text</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-slate-600 h-14 w-[50%] rounded-r-full justify-center items-center"
                onPress={() => {
                  setText("white");
                  manageCards.text("white");
                }}
              >
                <Text className="text-center text-white text-[20px]">Text</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className="bg-slate-500 h-12 w-24 rounded-full justify-center items-center mt-4"
              onPress={() => {
                {
                  editing
                    ? manageCards.editCard(
                      editing.id,
                      newCardName,
                      newDesc,
                      color,
                      text,
                      category
                    )
                    : manageCards.saveCard();

                }
                navigation.navigate("Home", { param:{recentlyUpdatedCategory: category }});
              }}
            >
              <Text className="text-center text-white text-[20px]">Save</Text>
            </TouchableOpacity>
          </>
        )}



        {nameSubmitted && !descSubmitted && (
          <>
            <TouchableOpacity
              className="bg-slate-500 h-12 w-24 rounded-full justify-center items-center mt-4"
              onPress={() => submitDesc()}
            >
              <View className="flex-1 items-center justify-center h-auto w-auto">
                <Text className="text-center text-white text-[20px]">
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        {!nameSubmitted && (
          <>
            <TouchableOpacity
              className="bg-slate-500 h-12 w-24 rounded-full justify-center items-center mt-4"
              onPress={() => submitName()}
            >
              <View className="flex-1 items-center justify-center h-auto w-auto">
                <Text className="text-center text-white text-[20px]">
                  Next
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View >
    </>
  );
});

export default Editor;
