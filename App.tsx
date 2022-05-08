import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import WalletList from "./components/WalletList";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`pt-8`}>
      <WalletList />
      <StatusBar style="auto" />
    </View>
  );
}
