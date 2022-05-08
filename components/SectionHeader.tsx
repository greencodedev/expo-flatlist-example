import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";

const ListHeader = ({
  handleSelectCate,
  handleStickyFlag,
  activeCate,
  data,
}: any) => {
  return (
    <View style={tw`py-4 pt-2`}>
      <View style={tw`rounded-md p-2 bg-gray-300 flex flex-row items-center`}>
        <FontAwesome name="search" style={tw`text-gray-500`} size={14} />
      </View>
      <ScrollView horizontal={true}>
        <View style={tw`flex flex-row items-center mt-4`}>
          {data?.length > 0 &&
            data.map((cate: any) => {
              if (cate.id === activeCate)
                return (
                  <TouchableOpacity
                    key={cate.id}
                    onPress={() => {
                      handleSelectCate(cate.id);
                      handleStickyFlag(true);
                    }}
                    style={tw`rounded-md flex flex-row justify-center items-center px-3 py-1 bg-white mr-2 border border-slate-300`}
                  >
                    <Text>{cate.title}</Text>
                  </TouchableOpacity>
                );
              else
                return (
                  <TouchableOpacity
                    key={cate.id}
                    onPress={() => handleSelectCate(cate.id)}
                    style={tw`rounded-md flex flex-row justify-center items-center px-3 py-1 bg-gray-300 mr-2`}
                  >
                    <Text>{cate.title}</Text>
                  </TouchableOpacity>
                );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListHeader;
