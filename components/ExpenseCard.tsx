import { View, Text } from 'react-native'
import React from 'react'
import { categoryBG } from '../theme'

interface ExpenseCardProps {
  item: {
    id: number,
    title: string,
    amount: number,
    category: string
  }
}
const ExpenseCard = ({item}:ExpenseCardProps) => {
  return (
    <View style={{backgroundColor:categoryBG[item.category]}} className='flex justify-between flex-row items-center p-3 mb-3  rounded-2xl  px-5 '> 
     <View>
         <Text className='text-black font-bold '>{item.title}</Text>
         
         <Text  className='text-black text-xs'>{item.category}</Text>


     </View>
     <View>
     <Text>${item.amount}</Text>
     </View>
    </View>
  )
}

export default ExpenseCard