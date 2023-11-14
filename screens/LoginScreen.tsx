import { View, Image , Text , TouchableOpacity , TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import BackButton from '../components/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
    const navigation = useNavigation()

  const handleSubmit = () => {
    if(email && password){
      navigation.goBack()
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
        
        <Text className={`${colors.heading} text-lg text-center font-bold`}>Sign In</Text>
        </View>
        
        <View className='flex-row justify-center my-3 mt-5'>
        <Image source={require('../assets/images/login.png')} className='h-80 w-80' />
      </View>
      <View className='space-y-2 mx-2 '>
        <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
        <Text  className={`${colors.heading} text-lg font-bold`}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
          <TouchableOpacity className='flex-row justify-end'>
            <Text>Forget Password ?</Text>
          </TouchableOpacity>
      </View>

      </View>

      <View>
        <TouchableOpacity onPress={handleSubmit} className='my-6 rounded-full p-3 shadow-sm mx-2' style={{backgroundColor:colors.button}}>
        <Text className='text-center text-white text-lg font-bold'>Sign In</Text>
        </TouchableOpacity>
      </View>
     </View>
    </ScreenWrapper>
  )
}

export default LoginScreen