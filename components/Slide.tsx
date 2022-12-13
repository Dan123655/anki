import { View, Text , TouchableOpacity,PanResponder } from 'react-native'
import React,{useState,useEffect,useLayoutEffect,} from 'react'
import manageCards from '../store/cardManager'
import { observer } from 'mobx-react-lite'
import { myCard } from '../types/typesImport'



const Slide = observer(({ name,color,text, description, id }: myCard, key: number,) => {
    const[longpressed,setLongpressed] = useState<boolean>(false)
    const [tapped, setTapped] = React.useState<boolean>(false);


    return (
        
      <TouchableOpacity onPress={() =>  setTapped(!tapped) }
                key={key}  className=" w-[100%] max-h-[500px] rounded-[50px] py-3 flex-1 items-center justify-center">
            <View className={`${color} w-[90%] mt-10 rounded-[50px] shadow-sm flex-1 items-center justify-center`}>
        <View className='flex-row w-[90%] items-center text-center justify-center'>
                    {!tapped && <Text className={`font-semibold text-[32px] text-${text} text-center`}>{
                        description.length > 150 ? description.toLocaleUpperCase().substring(0, 150)
                            + '...' :
                     description.toUpperCase()}</Text>
                    }
                 { tapped&&<Text className={`font-semibold text-[32px] text-${text} text-center`}>{
                     name.length > 30 ? name.toLocaleUpperCase().substring(0, 30) + '...' :
                     name.toUpperCase()}</Text>
                    }
                </View>
      </View>
        </TouchableOpacity>

    )
 
  
}
)
export default Slide