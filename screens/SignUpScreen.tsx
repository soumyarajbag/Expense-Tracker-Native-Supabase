import { View, Image , Text , TouchableOpacity , TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import BackButton from '../components/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Snackbar from 'react-native-snackbar';
import { RootStackParamList } from '../navigations/AppNavigation';
import { supabase } from '../lib/supabase';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Loading from '../components/Loading';
import { setUserLoading } from '../redux/slices/users';
type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const SignUpScreen = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')
  const dispatch = useAppDispatch()
  const {userLoading} = useAppSelector(state=>state.user)
    const navigation = useNavigation()

  const handleSubmit = async() => {
    if(email && password){
      dispatch(setUserLoading(true))
      const {data , error} = await supabase.auth.signUp({
        email : email ,
        password : password ,
        options : {
          data:{
            name:name
          }
        }
      })
      dispatch(setUserLoading(false))
      if(error){
        Snackbar.show({
          text: error.message,
         backgroundColor:'red'
        });
      }
        else if(data?.user){
         const {data:sign , error } =  await supabase.auth.signInWithPassword({
            email:email,
            password:password 
          })
          if(sign?.user){
            Snackbar.show({
              text: 'Account Created Successfully !',
             backgroundColor:'green'
            });
            await supabase.from('users').insert({id:data?.user.id , name:name , email:email})
            // dispatch(setUser(data?.user))
            console.log(data?.user)
          }
        }
        
      }
      else{
        Snackbar.show({
          text: 'Email and Password are required !',
         backgroundColor:'red'
        });
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
        
        <Text className={`${colors.heading} text-lg text-center font-bold`}>Sign Up</Text>
        </View>
        
        <View className='flex-row justify-center my-3 mt-5'>
        <Image source={require('../assets/images/signup.png')} className='h-80 w-80' />
      </View>
      <View className='space-y-2 mx-2 '>
      <Text className={`${colors.heading} text-lg font-bold`}>Name</Text>
        <TextInput value={name} onChangeText={setName} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
        <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
        <Text  className={`${colors.heading} text-lg font-bold`}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry className='px-4 py-3 mt-2 bg-white rounded-full mb-3' />
        
      </View>

      </View>

      {userLoading ?
          (
            <Loading />
          )  :
          (
            <TouchableOpacity onPress={handleSubmit} className='my-6 rounded-full p-3 shadow-sm mx-2' style={{backgroundColor:colors.button}}>
            <Text className='text-center text-white text-lg font-bold'>Sign Up</Text>
            </TouchableOpacity>
          )
      }
     </View>
    </ScreenWrapper>
  )
}

export default SignUpScreen