import axios from "axios";
import { CatalogProps } from "@/types/catalog.type";

export const getCatalog = async (): Promise<CatalogProps[]> => {
  const response = await axios.get<{ success: boolean; data: CatalogProps[] }>(
    "/api/v1/catalog",
  );
  return response.data.data;
};
