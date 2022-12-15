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
  //is there a card with this category?
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

  // const prevSlide = () => {
  //   if (slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //   } else {
  //     setSlideNumber(cards.length - 1);
  //   }
  // }


  return (
    <>
      {areCategories?<View className={`flex-1  items-center pt-8 justify-center`}>

        
        {category && <View className='flex-1 max-h-[470px] bottom-8  items-center justify-center'>

          {category && <Swiper
            horizontal={false}
            showsPagination={false}
          
          >
          
            {cards.map((card, key) => {
              if (card.category === category) {
                return <Slide key={key} id={card.id} name={card.name} category={card.category} text={card.text} color={card.color} description={card.description} />
              }
            })}

          </Swiper>}

        

        </View>}


      </View>
        :
        <View className='flex-1 bg-slate-300 items-center justify-center'>
          <Text className='text-2xl text-slate-600'>No cards in this category</Text>
          <TouchableOpacity
            //@ts-expect-error
            onPress={() => { navigation.navigate("Editor",{cat:{category}} ) }}
            className='absolute bottom-16'>
            
            <FontAwesome name="plus" size={56} color="gray" />
            </TouchableOpacity>
        </View>
        }

      <BottomBar />
    </>

  );
}

)









export default Slideshow