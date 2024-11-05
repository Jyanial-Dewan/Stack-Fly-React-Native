import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { FlightOfferData, SearchFlightData } from "@/types/types";

interface FormAreaProps {
  searchFlightData: SearchFlightData;
  flightOfferData: FlightOfferData;
}

const FormArea = ({ searchFlightData, flightOfferData }: FormAreaProps) => {
  const [pageNavigation, setPageNavigation] = useState("oneWay");

  const handlePageNavigation = (page: string) => {
    setPageNavigation(page);
  };
  return (
    <View className="bg-white gap-3 rounded-xl py-4 shadow-md shadow-slate-300">
      <View className="flex-row w-full justify-between px-4 py-2">
        <Pressable onPress={() => handlePageNavigation("oneWay")}>
          <View
            className={
              pageNavigation === "oneWay"
                ? "flex-row gap-2 items-center px-4 pb-2 border-b-4 border-b-[#03A65A]"
                : "flex-row gap-2 items-center px-4"
            }
          >
            <MaterialCommunityIcons
              name="chevron-double-right"
              size={24}
              color={pageNavigation === "oneWay" ? "#03A65A" : "#000000"}
            />
            <Text
              className={
                pageNavigation === "oneWay"
                  ? "text-xl font-bold text-[#03A65A]"
                  : "text-xl font-bold"
              }
            >
              One Way
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => handlePageNavigation("roundTrip")}>
          <View
            className={
              pageNavigation === "roundTrip"
                ? "flex-row gap-2 items-center px-4 pb-2 border-b-4 border-b-[#03A65A]"
                : "flex-row gap-2 items-center px-4"
            }
          >
            <MaterialCommunityIcons
              name="rotate-3d-variant"
              size={24}
              color={pageNavigation === "roundTrip" ? "#03A65A" : "#000000"}
            />
            <Text
              className={
                pageNavigation === "roundTrip"
                  ? "text-xl font-bold text-[#03A65A]"
                  : "text-xl font-bold"
              }
            >
              Round Trip
            </Text>
          </View>
        </Pressable>
      </View>

      <Pressable
        onPress={() => router.push("/departure")}
        className="h-12 mx-4 flex-row gap-4 items-center bg-transparent rounded-xl border-[#0B1C26] border-2"
      >
        <View className="px-4 border-[#0B1C26] border-r-2">
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={24}
            color="#0B1C26"
          />
        </View>
        {searchFlightData.originCity ? (
          <Text className="text-[#0B1C26] font-bold text-lg">
            {searchFlightData.originCity}
          </Text>
        ) : (
          <Text className="text-[#0B1C26] font-bold text-lg">
            Departure City
          </Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => router.push("/destination")}
        className="h-12 mx-4 flex-row gap-4 items-center bg-transparent rounded-xl border-[#0B1C26] border-2"
      >
        <View className="px-4 border-[#0B1C26] border-r-2">
          <MaterialCommunityIcons
            name="airplane-landing"
            size={24}
            color="#0B1C26"
          />
        </View>
        {searchFlightData.destinationCity ? (
          <Text className="text-[#0B1C26] font-bold text-lg">
            {searchFlightData.destinationCity}
          </Text>
        ) : (
          <Text className="text-[#0B1C26] font-bold text-lg">
            Destination City
          </Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => router.push("/calendar")}
        className="h-12 mx-4 flex-row gap-4 items-center bg-transparent rounded-xl border-[#0B1C26] border-2"
      >
        <View className="px-4 border-[#0B1C26] border-r-2">
          <MaterialCommunityIcons name="calendar" size={24} color="#0B1C26" />
        </View>
        {searchFlightData.departureDate ? (
          <Text className="text-[#0B1C26] font-bold text-lg">
            {searchFlightData.departureDate}
          </Text>
        ) : (
          <Text className="text-[#0B1C26] font-bold text-lg">
            Departure Date
          </Text>
        )}
      </Pressable>

      <View className="h-12 mx-4 flex-row gap-4 items-center bg-transparent rounded-xl border-[#0B1C26] border-2">
        <View className="px-4 border-[#0B1C26] border-r-2">
          <MaterialCommunityIcons
            name="seat-passenger"
            size={24}
            color="#0B1C26"
          />
        </View>
        <View className="justify-center w-[80%]">
          <TextInput
            placeholder="Seat"
            placeholderTextColor="#0B1C26"
            keyboardType="numeric"
            className="text-[#0B1C26] font-bold text-lg h-full"
          />
        </View>
      </View>

      <Pressable className="h-12 mx-4 bg-[#038C4C] rounded-lg items-center justify-center">
        <Text className="text-white font-bold text-lg">Search</Text>
      </Pressable>
    </View>
  );
};

export default FormArea;
