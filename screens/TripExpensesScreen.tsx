import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';

const items = [
  {
    id: 1,
    title: 'ate sandwitch',
    amount: 4,
    category: 'food'
  },
  {
    id: 2,
    title: 'bought a jacket',
    amount: 50,
    category: 'shopping'
  },
  {
    id: 3,
    title: 'watched a movie',
    amount: 100,
    category: 'entertainment'
  }
]


type TripExpensesScreenProps = NativeStackScreenProps<RootStackParamList, 'TripExpenses'>;
const TripExpensesScreen = (props: TripExpensesScreenProps) => {

  const { id, place, country } = props.route.params

  const navigation = useNavigation()
  return (
    <ScreenWrapper>
      <View className='px-4'>
        <View className='relative mt-4'>
          <View className='absolute top-2 left-0 z-10'>

            <BackButton />
       


          </View>
          <View>
            <Text className={`${colors.heading} text-xl text-center font-bold`}>{place}</Text>
            <Text className={`${colors.heading} text-md text-center `}>{country}</Text>
          </View>

        </View>

        <View className="flex-row justify-center items-center rounded-xl  mb-4">
          <Image
            source={require('../assets/images/7.png')}
            className="w-80 h-80"
          />
        </View>
        <View className=' space-y-3'>
          <View className='flex-row justify-between items-center'>
            <Text className={`${colors.heading} font-bold text-xl`}> Expenses </Text>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate('AddExpense' , {id:id})
            }} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              data={items}

              ListEmptyComponent={<EmptyList message={"You haven't recorded any expenses yet !"} />}

              showsVerticalScrollIndicator={false}

              className='mx-1'
              renderItem={({ item }) => {
                return (
                  <ExpenseCard item={item} />
                )
              }}
            />
          </View>
        </View>
      </View>

    </ScreenWrapper>
  );
};

export default TripExpensesScreen;
