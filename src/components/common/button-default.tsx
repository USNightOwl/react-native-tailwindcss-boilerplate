import { TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

type Props = {
  children: React.ReactNode;
  className?: string;
  func: () => void;
};

const ButtonDefault = ({ children, func, className = "" }: Props) => (
  <TouchableOpacity style={tw`bg-[#3355AC] py-2 px-4 rounded-md ${className}`} onPress={func}>
    <View style={tw`flex-row items-center justify-center gap-1`}>{children}</View>
  </TouchableOpacity>
);

export default ButtonDefault;
