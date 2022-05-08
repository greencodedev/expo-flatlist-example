import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import tw from "twrnc";

const WalletItem = ({ item }: any) => {
  return (
    <View
      style={tw`flex flex-row w-full justify-between items-center py-2`}
      key={item.key}
    >
      <View style={tw`flex flex-row items-center`}>
        <Image
          source={require("../assets/images/bitcoin-icon.png")}
          style={tw`w-6 h-6 mr-2`}
        />
        <Text style={tw`text-base`}>{item.name}</Text>
      </View>
      <View style={tw``}>
        <Text style={tw`text-base`}>{item.price}</Text>
      </View>
    </View>
  );
};

export default WalletItem;
