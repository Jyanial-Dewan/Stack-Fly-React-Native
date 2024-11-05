import axios from "axios";

export const apiToken = "QUVzzMkm3BFTHLzopVwAyws1Wicd";

export const baseUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers";

export let newApiToken = "";

const data = {
  client_id: "1xYtTnrMKunHTzmQVxIY6j9g7GtpTtAA",
  client_secret: "AOi2NwhMr6D7fx9l",
  grant_type: "client_credentials",
};

const getNewApiToken = async () => {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    newApiToken = response.data.access_token;
    console.log("token: ", newApiToken);
  } catch (error) {
    console.log("error: ", error);
  }
};

getNewApiToken();
