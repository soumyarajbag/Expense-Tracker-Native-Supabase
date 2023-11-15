import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React , {useEffect , useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/AppNavigation';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../lib/supabase';
import { useAppSelector } from '../redux/hooks';
import Snackbar from 'react-native-snackbar';

const items = [
  {
    id: 1,
    place: 'Gujrat',
    country: 'Pakistan',
  },
  {
    id: 2,
    place: 'London Eye',
    country: 'England',
  },
  {
    id: 3,
    place: 'Washington dc',
    country: 'America',
  },
  {
    id: 4,
    place: 'New york',
    country: 'America',
  },
  {
    id: 5,
    place: 'Washington dc',
    country: 'America',
  },
  {
    id: 6,
    place: 'New york',
    country: 'America',
  },
];

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {user} = useAppSelector(state => state.user);
  const [trips , setTrips] = useState<any>([])
  const fetchTrips = async () => {
    if(user){
      const {data , error} = await supabase.from('trips').select('*').eq('user_id' , user.id)
      if(error){
       Snackbar.show({
          text:error.message,
          backgroundColor:'red'
       })
      }
      else{
        console.log(data)
       setTrips(data)
      }
    }
  }
  useEffect(()=>{
    fetchTrips()
  }, [])
  const handleSignOut = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex-row p-4 justify-between items-center">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={handleSignOut}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            {' '}
            Recent Trips{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddTrip');
            }}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={trips}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={"You haven't recorded any trips yet !"} />
            }
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TripExpenses', {
                      id: item.id,
                      place: item.place,
                      country: item.country,
                    });
                  }}
                  className="bg-white p-3 rounded-2xl mb-3 shadow-sm ">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
