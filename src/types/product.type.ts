export interface ProductBadge {
  id: number;
  text: string;
  textColor: string;
  backgroundColor: string;
  description: string | null;
  link: string | null;
}

export interface Product {
  productId: number;
  title: string;
  sellPrice: number;
  fullPrice: number;
  compressedImage: string;
  image: string;
  rating: number;
  reviewsQuantity: number;
  ordersQuantity: number;
  rOrdersQuantity: number;
  isFavorite: boolean | null;
  isAdultCategory: boolean;
  charityCommission: number;
  isEco: boolean;
  hasVerticalPhoto: boolean;
  badges: ProductBadge[];
  titleBadges: unknown | null;
  categoryId: number;
  characteristicValueIds: number[] | null;
  skuGroupId: number | null;
  discount: number | null;
}

export interface ProductCategoryBlock {
  categoryId: number;
  title: string;
  productList: Product[];
  offerDto: unknown | null;
}
