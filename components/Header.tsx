import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="flex-row h-full justify-between items-center px-8">
      <View className="w-1/2 flex-row gap-2">
        <View>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className="h-12 w-12 rounded-full object-center object-cover"
          />
        </View>

        <View>
          <Text className="text-white">Welcome Back</Text>
          <Text className="text-xl font-bold text-[#03A65A]">Jyanial 👋</Text>
        </View>
      </View>
      <View className="bg-gray-500/50 px-5 py-3 rounded-l-full rounded-r-full flex-row items-center gap-2">
        <View className="bg-gray-500/40 h-12 w-12 justify-center items-center rounded-full">
          <Text className="text-xl font-bold text-white">J</Text>
        </View>

        <View>
          <Text className="text-white">Flight Point</Text>
          <Text className="text-white">✈️ 5,321</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
