import { View, Image , Text , TouchableOpacity , TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import BackButton from '../components/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type AddTripScreenProps = NativeStackScreenProps<RootStackParamList, 'AddTrip'>;
const AddTripScreen = ({navigation}:AddTripScreenProps) => {
  const [place , setPlace] = useState('')
  const [country , setCountry] = useState('')
  

  const handleAddTrip = () => {
    if(place && country){
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
        <View className='absolute top-0 left-0'>
        <BackButton />
        </View>
        
        <Text className={`${colors.heading} text-lg text-center font-bold`}>Add Trip</Text>
        </View>
        
        <View className='flex-row justify-center my-3 mt-5'>
        <Image source={require('../assets/images/4.png')} className='h-72 w-72' />
      </View>
      <View className='space-y-2 mx-2 '>
        <Text className={`${colors.heading} text-lg font-bold`}>Where on Earth ?</Text>
        <TextInput value={place} onChangeText={setPlace} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
        <Text  className={`${colors.heading} text-lg font-bold`}>Which Country ?</Text>
        <TextInput value={country} onChangeText={setCountry} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />

      </View>

      </View>

      <View>
        <TouchableOpacity onPress={handleAddTrip} className='my-6 rounded-full p-3 shadow-sm mx-2' style={{backgroundColor:colors.button}}>
        <Text className='text-center text-white text-lg font-bold'>Add Trip</Text>
        </TouchableOpacity>
      </View>
     </View>
    </ScreenWrapper>
  )
}

export default AddTripScreen