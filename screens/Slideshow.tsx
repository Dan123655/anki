import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import BottomBar from '../components/BottomBar'
import Slide from '../components/Slide'
import { observer } from 'mobx-react-lite'
import manageCards from '../store/cardManager'
import { myCard } from '../types/typesImport'
import Swiper from 'react-native-swiper'


const Slideshow = observer(() => {
  const [slideNumber, setSlideNumber] = React.useState<number>(0);
  const [cards, setCards] = React.useState<myCard[]>(manageCards.myCards);

  const nextSlide = () => {
    if (slideNumber < cards.length - 1) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(0);
    }
  }

  const prevSlide = () => {
    if (slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
    } else {
      setSlideNumber(cards.length - 1);
    }
  }


  return (
    <>
      <View className='bg-slate-700 flex-1  items-center pt-8 justify-center'>

        
      <View className='bg-slate-700 flex-1 max-h-[470px] bottom-8  items-center justify-center'>

        <Swiper
            horizontal={false}
            showsPagination={false}
          
            >
          
        {cards.map((card, key) => {
          return <Slide key={key} id={card.id} name={card.name} description={card.description} />
        })}
        </Swiper>
        

</View>

      </View>
      <BottomBar />
    </>
    // <>
    //   <View className='bg-yellow-600 flex-1 items-center px-3 pt-8 justify-center'>
    //     <Swiper
    //     horizontal={false}>
    //     {cards.map((card, key) => {
    //       return <Slide key={key} id={card.id} name={card.name} description={card.description} />
    //     })}
    //   </Swiper>
    //   </View>
    //   <BottomBar />
    // </>
  );
}

)









export default Slideshow