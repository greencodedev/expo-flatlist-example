import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";

const Header = ({ loading }: any) => {
  return (
    <View style={tw`w-full pb-4`}>
      <View style={tw`flex flex-row justify-between items-center pb-2`}>
        <Text style={tw`text-2xl font-bold`}>Wallet</Text>
        <TouchableOpacity>
          <FontAwesome name="plus" size={18} />
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={tw`flex justify-center items-center py-8`}>
          <Text style={tw`text-sm text-gray-500 mb-1`}>
            Swipe down to refresh
          </Text>
          <ActivityIndicator size="large" />
        </View>
      )}
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/card.png")}
        style={tw`rounded-xl p-4 items-end h-48 flex flex-col justify-end overflow-hidden`}
      >
        <View style={tw`w-full flex flex-row justify-between items-center`}>
          <TouchableOpacity
            style={tw`rounded-md flex flex-row justify-around items-center py-3 px-8 bg-white mr-2`}
          >
            <AntDesign name="upload" size={16} color="#386CF3" />
            <Text style={[tw`ml-4 text-base font-bold`, { color: "#386CF3" }]}>
              Send
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`rounded-md flex flex-row justify-around items-center py-3 px-8 bg-white ml-2`,
              { backgroundColor: "#7685FF" },
            ]}
          >
            <AntDesign name="download" size={16} color="white" />
            <Text style={[tw`ml-4 text-base font-bold`, { color: "white" }]}>
              Receive
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
