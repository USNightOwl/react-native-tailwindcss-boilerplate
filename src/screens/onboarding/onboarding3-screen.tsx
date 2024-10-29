import { Image, View, Text } from "react-native";
import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "react-native-heroicons/outline";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import OnboardingLayout from "../../layouts/onboarding/onboarding-layout";
import ButtonDefault from "../../components/common/button-default";
import tw from "../../lib/tailwind";
import { Onboarding2ScreenName, Onboarding4ScreenName } from "./onboarding";

const Onboarding3Screen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <OnboardingLayout>
      <View>
        <Image source={require("../../../assets/images/onboarding/onboarding_3.png")} />
      </View>
      <View style={tw`px-4 w-full absolute bottom-10 flex-row justify-between`}>
        <ButtonDefault className="bg-transparent" func={() => navigation.navigate(Onboarding2ScreenName)}>
          <ChevronLeftIcon strokeWidth={2} color="#3355AC" />
          <Text style={tw`text-[#3355AC]`}>Quay lại</Text>
        </ButtonDefault>

        <ButtonDefault func={() => navigation.navigate(Onboarding4ScreenName)}>
          <Text style={tw`text-white`}>Tiếp theo</Text>
          <ChevronRightIcon strokeWidth={2} color="#fff" />
        </ButtonDefault>
      </View>
    </OnboardingLayout>
  );
};
export default Onboarding3Screen;
