import axios from "axios";
import { CitiesProps } from "@/types/cities.type";

export const getCities = async (): Promise<CitiesProps[]> => {
  try {
    const response = await axios.get<{ success: Boolean; data: CitiesProps[] }>(
      "/api/v1/cities",
    );
    return response.data.data;
  } catch (error) {
    console.error("Cities API chaqirishda xato:", error);

    return [];
  }
};
