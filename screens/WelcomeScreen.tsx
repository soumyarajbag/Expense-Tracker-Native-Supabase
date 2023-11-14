import { View, Text , TouchableOpacity , Image} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome' , string>;
const WelcomeScreen = (props:WelcomeScreenProps) => {
  
  return (
  <ScreenWrapper>
    <View className='flex h-full justify-around'>
    <View className='flex-row justify-center mt-10'>
    <Image source={require('../assets/images/welcome.gif')} className='h-80 w-80 shadow' />
    </View>
    <View className='mx-5 mb-20'>
      <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>Expensify </Text>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}} style={{backgroundColor:colors.button}} className='shadow p-3 mb-5 rounded-full '>
        <Text className='text-center text-white text-lg font-bold'>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}} style={{backgroundColor:colors.button}} className='shadow p-3 rounded-full '>
        <Text className='text-center text-white text-lg font-bold'>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  </ScreenWrapper>
  )
}

export default WelcomeScreen