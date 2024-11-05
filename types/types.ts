export interface FlightOfferData {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: Date;
  returnDate: Date;
  adults: number;
  maxResults: number;
}

export interface SearchFlightData {
  originCity: string;
  destinationCity: string;
  departureDate: string;
  seats: number;
}
