import { FlightOfferData, SearchFlightData } from "@/types/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppContedProviderProps {
  children: ReactNode;
}

interface AppContext {
  searchFlightData: SearchFlightData;
  setSearchFlightData: React.Dispatch<React.SetStateAction<SearchFlightData>>;
  flightOfferData: FlightOfferData;
  setFlightOfferData: React.Dispatch<React.SetStateAction<FlightOfferData>>;
}

const AppContex = createContext({} as AppContext);

export function useAppContext() {
  return useContext(AppContex);
}

export function AppContextProvider({ children }: AppContedProviderProps) {
  const [searchFlightData, setSearchFlightData] = useState<SearchFlightData>({
    originCity: "",
    destinationCity: "",
    departureDate: "",
    seats: 0,
  });
  const [flightOfferData, setFlightOfferData] = useState<FlightOfferData>({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: new Date(),
    returnDate: new Date(),
    adults: 0,
    maxResults: 10,
  });

  return (
    <AppContex.Provider
      value={{
        searchFlightData,
        setSearchFlightData,
        flightOfferData,
        setFlightOfferData,
      }}
    >
      {children}
    </AppContex.Provider>
  );
}
