import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#0B1C26" }}>
      <StatusBar style="light" />
      <View className="h-full">
        <View className="w-full px-8 my-8 items-center">
          <Animated.View
            entering={FadeInDown.duration(200).springify()}
            className="flex-row justify-center items-center pb-24"
          >
            <MaterialCommunityIcons name="airplane" size={24} color="#03A65A" />
            <Text className="text-white text-xl leading-[60px] pl-1">
              STACKS
            </Text>
            <Text className="text-[#038C4C] text-xl leading-[60px] pl-1 italic">
              FLY
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(200).springify()}
          >
            <Text className="text-neutral-300 text-[52px] font-medium leading-[60px]">
              Discover Your Dream Flight Easily
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(400).springify()}
          >
            <Text className="text-neutral-300 text-lg font-medium leading-[38px] mt-3">
              Find an easy way to buy an airplane ticket with just a few click
              in this application.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(600).springify()}
            className=" w-full justify-start mt-8"
          >
            <Pressable
              onPress={() => router.push("/(tabs)")}
              className="bg-[#06734B] h-12 rounded-lg items-center justify-center"
            >
              <Text className="text-white text-bold text-lg">DISCOVER</Text>
            </Pressable>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(800).springify()}
            className="flex-row w-full justify-center gap-2 mt-4"
          >
            <Text className="text-white text-lg">Don't have an acount?</Text>
            <Text className="text-white font-semibold text-lg">Register</Text>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
