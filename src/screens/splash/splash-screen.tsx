import { Image } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import OnboardingLayout from "../../layouts/onboarding/onboarding-layout";
import { Onboarding1ScreenName } from "../onboarding/onboarding";

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Onboarding1ScreenName);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OnboardingLayout>
      <Image source={require("../../../assets/images/splash.png")} />
    </OnboardingLayout>
  );
};

export default SplashScreen;

export const SplashScreenName = "splash";
