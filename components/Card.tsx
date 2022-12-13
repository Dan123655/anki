import { View, Text , TouchableOpacity,PanResponder } from 'react-native'
import React,{useState,useEffect,useLayoutEffect,} from 'react'
import manageCards from '../store/cardManager'
import { observer } from 'mobx-react-lite'
import { myCard } from '../types/typesImport'



const Card = observer(({ name,text,color, description, id }: myCard, key: number,) => {
    const[longpressed,setLongpressed] = useState<boolean>(false)
    const [tapped, setTapped] = React.useState<boolean>(false);


    return (
        
      <TouchableOpacity 
                key={key} onLongPress={() => { manageCards.deleteCard(id)}}  className=" w-[100%] rounded-[20px] py-2 flex-1 items-center justify-center">
       <View className={`${color} w-[100%] rounded-[20px] h-24 flex-1 items-center justify-center`}>
        <View className='flex-row w-[90%] items-center text-center justify-center'>
                  <Text className={`font-semibold text-[32px] text-${text} text-center`}>{
                     description.length > 30 ? description.toLocaleUpperCase().substring(0, 30) + '...' :
                     description.toUpperCase()}</Text>
                  </View>
      </View>
        </TouchableOpacity>

    )
 
  
}
)
export default Card