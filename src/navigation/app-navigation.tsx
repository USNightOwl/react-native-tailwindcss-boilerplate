import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen, { SplashScreenName } from "../screens/splash/splash-screen";
import Onboarding2Screen from "../screens/onboarding/onboarding2-screen";
import Onboarding1Screen from "../screens/onboarding/onboarding1-screen";
import Onboarding3Screen from "../screens/onboarding/onboarding3-screen";
import Onboarding4Screen from "../screens/onboarding/onboarding4-screen";
import {
  Onboarding1ScreenName,
  Onboarding2ScreenName,
  Onboarding3ScreenName,
  Onboarding4ScreenName,
} from "../screens/onboarding/onboarding";
import { SignInScreenName, SignUpScreenName } from "../screens/auth/auth";
import SignInScreen from "../screens/auth/sign-in-screen";
import SignUpScreen from "../screens/auth/sign-up-screen";

export type NavigatorParamList = {
  [SplashScreenName]: undefined;
  [Onboarding1ScreenName]: undefined;
  [Onboarding2ScreenName]: undefined;
  [Onboarding3ScreenName]: undefined;
  [Onboarding4ScreenName]: undefined;
  [SignInScreenName]: undefined;
  [SignUpScreenName]: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const StackNavigation = () => {
  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName={SplashScreenName}>
      {/* slash screen */}
      <Stack.Screen options={options} name={SplashScreenName} component={SplashScreen} />

      {/* on boarding */}
      <Stack.Screen options={options} name={Onboarding1ScreenName} component={Onboarding1Screen} />
      <Stack.Screen options={options} name={Onboarding2ScreenName} component={Onboarding2Screen} />
      <Stack.Screen options={options} name={Onboarding3ScreenName} component={Onboarding3Screen} />
      <Stack.Screen options={options} name={Onboarding4ScreenName} component={Onboarding4Screen} />

      {/* auth */}
      <Stack.Screen options={options} name={SignInScreenName} component={SignInScreen} />
      <Stack.Screen options={options} name={SignUpScreenName} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export default AppNavigation;
