import { View, Image , Text , TouchableOpacity , TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import BackButton from '../components/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { categories } from '../constants';
type AddExpenseScreenProps = NativeStackScreenProps<RootStackParamList, 'AddExpense'>;
const AddExpenseScreen = ({navigation}:AddExpenseScreenProps) => {
  const [title , setTitle] = useState('')
  const [expense , setExpense] = useState('')
  const [category , setCategory] = useState('')

  const handleAddExpense = () => {
    if(title && expense && category){
        navigation.navigate('Home')
    }
    else{
      console.log("Error")
    }
  }
  return (
    <ScreenWrapper>
     <View className='flex justify-between h-full mx-4'>
      <View>
        <View className='relative mt-4'>
        <View className='absolute top-0 left-0 z-10'>
        <BackButton />
        </View>
        
        <Text className={`${colors.heading} text-lg text-center font-bold`}>Add Expense</Text>
        </View>
        
        <View className='flex-row justify-center my-3 mt-5'>
        <Image source={require('../assets/images/expenseBanner.png')} className='h-72 w-72' />
      </View>
      <View className='space-y-2 mx-2 '>
        <Text className={`${colors.heading} text-lg font-bold`}>Title</Text>
        <TextInput value={title} onChangeText={setTitle} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
        <Text  className={`${colors.heading} text-lg font-bold`}>Expense</Text>
        <TextInput value={expense} onChangeText={setExpense} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />

      </View>

<View className='mx-2 space-x-2'>
  <Text className='text-lg font-bold'>Category</Text>
  <View className='flex-row flex-wrap items-center'>
    {
      categories.map((cat , index) => {
        let color = 'bg-white';
        if(cat.value===category){
          color = 'bg-green-200'
        }
        return (
            <TouchableOpacity onPress={()=>setCategory(cat.value)} key={cat.value} className={`${color} rounded-full  px-4 p-3 mb-2 mr-2`}>
              <Text>{cat.title}</Text>
            </TouchableOpacity>
        )
      })
    }
  </View>
</View>
      </View>

      <View>
        <TouchableOpacity onPress={handleAddExpense} className='my-6 rounded-full p-3 shadow-sm mx-2' style={{backgroundColor:colors.button}}>
        <Text className='text-center text-white text-lg font-bold'>Add Expense</Text>
        </TouchableOpacity>
      </View>
     </View>
    </ScreenWrapper>
  )
}

export default AddExpenseScreen