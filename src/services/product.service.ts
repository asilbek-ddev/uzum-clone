import axios from "axios";
import { ProductCategoryBlock } from "@/types/product.type";

export const getProductsByCategory = async (categoryId: number) => {
  const response = await axios.get<ProductCategoryBlock[]>(
    `/api/v1/catalog${categoryId}`,
  );
  return response.data;
};
