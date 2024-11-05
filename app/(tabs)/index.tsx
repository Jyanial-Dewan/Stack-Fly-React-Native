import FormArea from "@/components/FormArea";
import Header from "@/components/Header";
import { useAppContext } from "@/Context/AppContext/AppContext";
import { FlightOfferData, SearchFlightData } from "@/types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function HomeScreen() {
  const [isPending, setIsPending] = useState(false);
  const {
    searchFlightData,
    setSearchFlightData,
    flightOfferData,
    setFlightOfferData,
  } = useAppContext();

  return (
    <View className="flex-1 items-center bg-neutral-100 relative">
      <StatusBar style="light" />
      {isPending && (
        <View className="absolute z-50 bg-[#0E0A26]/90 w-full h-full justify-center items-center">
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {/* Header */}
      <View className="bg-[#0E0A26] border-b-orange-600 h-64 w-full rounded-b-3xl">
        <Header />
      </View>

      {/* Form Area */}
      <View className="w-full p-4 mx-8 absolute top-[150px]">
        <FormArea
          flightOfferData={flightOfferData}
          searchFlightData={searchFlightData}
        />
      </View>
    </View>
  );
}
