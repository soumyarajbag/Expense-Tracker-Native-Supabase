import { View, Text } from 'react-native'
import React from 'react'
import { categoryBG } from '../theme'

interface ExpenseCardProps {
  item: {
    id: number,
    title: string,
    expenses: number,
    category: string
  }
}
const ExpenseCard = ({item}:ExpenseCardProps) => {
  const {title , category , expenses} = item
  return (
    <View style={{backgroundColor:categoryBG[item.category]}} className='flex justify-between flex-row items-center p-3 mb-3  rounded-2xl  px-5 '> 
     <View>
         <Text className='text-black font-bold '>{title}</Text>
         
         <Text  className='text-black text-xs'>{category}</Text>


     </View>
     <View>
     <Text>${expenses}</Text>
     </View>
    </View>
  )
}

export default ExpenseCard