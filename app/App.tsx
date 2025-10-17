import * as React from 'react';
import {
  createStaticNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homescreen';
import LoginScreen from './loginscreen';
import ProductScreen from './productscreen';
import UserScreen from './userscreen';

const MyStack = createStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: {headerShown: false},
    },
    Home: {
      screen: HomeScreen,
      options: {headerTitle: "Selamat Datang"}
    },
    Product: {
      screen: ProductScreen,
      options: {headerTitle : "Detail Product"}
    },
    User: {
      screen: UserScreen,
      options: {headerTitle: "Detail User"}
    }
  },
});

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}
