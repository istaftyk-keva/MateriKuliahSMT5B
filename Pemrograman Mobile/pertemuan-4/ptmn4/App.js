import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens — perhatikan huruf besar/kecil harus sama persis dengan nama file
import Login from './screens/login';
import Signup from './screens/signup';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

// ============================================
// LAPISAN PALING DALAM: Tab Navigator
// ============================================
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#0284c7' }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// ============================================
// LAPISAN TENGAH: Drawer Navigator
// ============================================
const Drawer = createDrawerNavigator();

function MainApp() {
  return (
    <Drawer.Navigator initialRouteName="Beranda">
      <Drawer.Screen
        name="Beranda"
        component={HomeTabs}
        options={{ drawerLabel: 'Beranda (Home & Profile)' }}
      />
      <Drawer.Screen
        name="Pengaturan"
        component={SettingsScreen}
        options={{ drawerLabel: 'Pengaturan' }}
      />
    </Drawer.Navigator>
  );
}

// ============================================
// LAPISAN PALING LUAR: Stack Navigator
// ============================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Daftar Akun Baru' }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}