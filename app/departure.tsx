import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { newApiToken } from "../utils/api";
import axios from "axios";
import { useAppContext } from "@/Context/AppContext/AppContext";

interface PreviousDepartureCities {
  city: string;
  iataCode: string;
}

const DepartureCity = () => {
  const [searchInput, setSearchInput] = useState("");
  const [seacrResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setSearchFlightData, searchFlightData } = useAppContext();

  useEffect(() => {
    // Set a timeout to send request 2 seconds after the user stops typing
    const timeoutId = setTimeout(() => {
      if (searchInput) {
        autoSearch(searchInput);
      }
    }, 2000);

    // Cleanup the timeout if the user types again before 2 seconds
    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  const autoSearch = async (searchInput: string) => {
    try {
      setIsLoading(true);
      const headers = {
        Authorization: `Bearer ${newApiToken}`,
      };

      const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${searchInput}`;

      const response = await axios.get(url, { headers });
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (item: any) => {
    setSearchFlightData({ ...searchFlightData, originCity: item.name });
    setSearchInput(`${item.name} (${item.iataCode})`);
  };

  return (
    <View className="flex-1 items-center bg-neutral-100 relative">
      <StatusBar style="light" />

      {isLoading && (
        <View className="absolute z-50 bg-neutral-400/20 w-full h-full justify-center items-center">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
      {/* Header */}
      <View className="bg-[#0E0A26] h-32 w-full rounded-b-3xl justify-center">
        <View className="flex-row justify-between items-center mt-10 mx-4">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 bg-gray-200 justify-center items-center rounded-full"
          >
            <MaterialCommunityIcons
              name="arrow-left-thick"
              size={24}
              color="#111827"
            />
          </Pressable>
          <Text className="text-white font-bold text-lg">Select Departure</Text>
          <Pressable>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="white"
            />
          </Pressable>
        </View>
      </View>

      <View className="w-[90%] h-12  mt-4">
        <TextInput
          className="border-[#0B1C26] font-bold border-2 pl-4 rounded-lg h-full"
          placeholder="Search City or airport..."
          placeholderTextColor="#0B1C26"
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
        />
      </View>

      {seacrResult.length > 0 && (
        <View className="border-2 w-[90%] mx-auto mt-4 border-[#0E0A26] bg-white shadow-md rounded-xl">
          <FlatList
            data={seacrResult}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSelect(item)}
                className="px-2 py-2 "
              >
                <Text>
                  {item.name} ({item.iataCode})
                </Text>
              </Pressable>
            )}
          />
        </View>
      )}
      {/* 
      {previousSelectedDeparture.length > 0 && (
        <View className="items-center w-[90%] mt-4">
          <Text className="text-xl font-bold">Previous Search</Text>
          <View className="border-2 w-full mx-auto mt-4 border-[#0E0A26] bg-white shadow-md rounded-xl">
            <FlatList
              data={previousSelectedDeparture}
              keyExtractor={(item) => item.iataCode}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleSelectAutoComplete(item)}
                  className="px-2 py-2 "
                >
                  <Text>
                    {item.city} ({item.iataCode})
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      )} */}
    </View>
  );
};

export default DepartureCity;
