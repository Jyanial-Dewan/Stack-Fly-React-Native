import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const DestinationCity = () => {
  return (
    <View className="flex-1 items-center bg-neutral-100 relative">
      <StatusBar style="light" />
      {/* Header */}
      <View className="bg-[#0E0A26] border-b-orange-600 h-64 w-full rounded-b-3xl"></View>
    </View>
  );
};

export default DestinationCity;
