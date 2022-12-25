import { View, Text,TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import BottomBar from '../components/BottomBar'
import Slide from '../components/Slide'
import { observer } from 'mobx-react-lite'
import manageCards from '../store/cardManager'
import { myCard } from '../types/typesImport'
import Swiper from 'react-native-swiper'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'


const Slideshow = observer(({ route }: any) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,

      });
  }, [manageCards.myCards]);
  const [slideNumber, setSlideNumber] = React.useState<number>(0);
  const [cards, setCards] = React.useState<myCard[]>(manageCards.myCards);
  const [category, setCategory] = React.useState<string | boolean>(route?.params?.param || false);
  const [areCategories, setAreCategories] = React.useState(
    ()=>{ 
      let result = false;
      cards.forEach((card)=>{
        if(card.category == category){
          result = true;
        }
      })
      return result;
    }
  );
  console.log(category)
  const nextSlide = () => {
    if (slideNumber < cards.length - 1) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  }


const[hidden,setHidden] = React.useState<boolean>(true);

    


  return (
    <>
      {areCategories ? (
        <View className={`flex-1  items-center pt-16 justify-center`}>
          {category && (
            <View className="flex-1 max-h-[700px] bottom-8  items-center justify-center">
              {category && (
                <>
                  {/* <TouchableOpacity
                    onPress={() => setHidden(!hidden)}
                    className="bg-red-400 h-10 w-24 rounded-[10px]"
                  >
                    <Text className="font-bold text-center top-3">
                      {hidden ? "active" : "all cards"}
                    </Text>
                  </TouchableOpacity> */}
                  <View className="flex-row h-10 w-48 mb-12 rounded-[18px]">
                    <TouchableOpacity
                      onPress={() => setHidden(true)}
                      className={`${hidden ? 'bg-slate-600' : 'bg-slate-200'} h-10 w-24 rounded-l-[18px] items-center`}>
                    <Text className={`font-bold text-[16px] text-center top-3 ${hidden?'text-white':''}`}>
                      active
                      </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      onPress={() => setHidden(false)}
                      className={`${!hidden ? 'bg-slate-600' : 'bg-slate-200'} h-10 w-24 rounded-r-[18px] items-center`}>
                    <Text className={`font-bold text-[16px] text-center top-3 ${!hidden?'text-white':''}`}>
                      all
                      </Text>
                      </TouchableOpacity>
                  </View>




                  {!hidden&&<Swiper
              horizontal={false}
              showsPagination={false}
          
            >
          
              {
                cards.map((card, key) => {
                  if (card.category === category) {
                    return <Slide key={key}
                      id={card.id}
                      hidden={card.hidden}
                      name={card.name}
                      category={card.category}
                      text={card.text}
                      color={card.color}
                      description={card.description} />
                  }
                })
              }



            </Swiper>}
            {hidden&&<Swiper
              horizontal={false}
              showsPagination={false}
          
            >
          
              {
                cards.map((card, key) => {
                  if (card.category === category) {
                    if (!card.hidden) {
                      return <Slide key={key}
                        id={card.id}
                        hidden={card.hidden}
                        name={card.name}
                        category={card.category}
                        text={card.text}
                        color={card.color}
                        description={card.description} />
                    }else{return}
                  }
                })
              }



            </Swiper>}

                </>
              )}
            </View>
          )}
        </View>
      ) : (
        <View className="flex-1 bg-slate-300 items-center justify-center">
          <Text className="text-2xl text-slate-600">
            No cards in this category
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Editor", { param: { category: category } });
            }}
            className="absolute bottom-16"
          >
            <FontAwesome name="plus" size={56} color="gray" />
          </TouchableOpacity>
        </View>
      )}

      <BottomBar />
    </>
  );
}

)









export default Slideshow