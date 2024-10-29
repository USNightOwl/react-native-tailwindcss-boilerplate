import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => (
  <SafeAreaView style={tw`flex-1 items-center justify-center`}>{children}</SafeAreaView>
);

export default AuthLayout;
