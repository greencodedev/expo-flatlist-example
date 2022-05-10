import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";
import { listData } from "../constant/data";
import WalletItem from "./WalletItem";
import Header from "./Header";
import SectionHeader from "./SectionHeader";

const ItemList = ({ title, data }: any) => {
  const renderItem = ({ item }: any) => (
    <WalletItem item={item} key={item.key} />
  );
  return (
    <View>
      <View style={tw`flex flex-row w-full justify-between items-center py-2`}>
        <Text style={tw`text-base`}>{title}</Text>
        <FontAwesome
          name="sort-amount-desc"
          size={12}
          style={tw`text-gray-300 font-semibold`}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const WalletList = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCate, setSelectedCate] = useState(listData[0].id);
  const refFlatList = useRef<any>();
  const [stickyFlag, setStickyFlag] = useState<boolean>(false);

  const fetchAllData = () => {
    setLoading(true);
    // API call
    let timerId = setInterval(() => {
      setLoading(false);
      clearInterval(timerId);
    }, 5000);
  };

  const renderItem = ({ item }: any) => (
    <ItemList title={item.title} data={item.data} key={"cate-" + item.id} />
  );

  // when select tab, go to the related data
  useEffect(() => {
    refFlatList?.current.scrollToIndex({
      animated: true,
      index: selectedCate - 1,
    });
  }, [selectedCate]);

  return (
    <View style={tw`px-4`}>
      {stickyFlag && (
        <View style={tw`fixed`}>
          <SectionHeader
            handleSelectCate={setSelectedCate}
            activeCate={selectedCate}
            data={listData}
          />
        </View>
      )}
      <FlatList
        ListHeaderComponent={
          <>
            <Header loading={loading} />
            <SectionHeader
              handleSelectCate={setSelectedCate}
              handleStickyFlag={setStickyFlag}
              activeCate={selectedCate}
              data={listData}
            />
          </>
        }
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        onRefresh={fetchAllData}
        refreshing={loading}
        ref={refFlatList}
        onScroll={({ nativeEvent }: any) =>
          setStickyFlag(nativeEvent.contentOffset.y > 340)
        }
      />
    </View>
  );
};

export default WalletList;
