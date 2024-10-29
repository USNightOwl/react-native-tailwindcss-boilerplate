import { Image, View, Text } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import OnboardingLayout from "../../layouts/onboarding/onboarding-layout";
import ButtonDefault from "../../components/common/button-default";
import tw from "../../lib/tailwind";
import { Onboarding2ScreenName } from "./onboarding";

const Onboarding1Screen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <OnboardingLayout>
      <View>
        <Image source={require("../../../assets/images/onboarding/onboarding_1.png")} />
      </View>

      {/* Button bottom */}
      <View style={tw`px-4 w-full absolute bottom-10 flex-row justify-end`}>
        <ButtonDefault func={() => navigation.navigate(Onboarding2ScreenName)}>
          <Text style={tw`text-white`}>Tiếp theo</Text>
          <ChevronRightIcon strokeWidth={2} color="#fff" />
        </ButtonDefault>
      </View>
    </OnboardingLayout>
  );
};
export default Onboarding1Screen;
