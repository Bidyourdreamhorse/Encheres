import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CreateListingScreen from './screens/CreateListingScreen';
import ListingDetailScreen from './screens/ListingDetailScreen';
import { theme } from '@ui/theme';
import { Logo } from '@ui/Logo';

export type RootStackParamList = {
  SignIn: undefined; Register: undefined; Home: undefined;
  CreateListing: undefined; ListingDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const navTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: theme.colors.gold, background: '#fff' } };

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerStyle:{ backgroundColor: theme.colors.black }, headerTintColor:'#fff' }}>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerTitle: () => <Logo size={28} /> }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title:'Créer un compte' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title:'Chevaux en vente' }} />
        <Stack.Screen name="CreateListing" component={CreateListingScreen} options={{ title:'Nouvelle annonce' }} />
        <Stack.Screen name="ListingDetail" component={ListingDetailScreen} options={{ title:'Détails du cheval' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
