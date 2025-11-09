import { 
    ChevronDown,
     ChevronLeft,
      ChevronRight, 
      ChevronUp, 
      Facebook, 
      GalleryVerticalEnd,
       Heart, 
       Instagram, 
       MapPin, 
       Search, 
       ShoppingBag, 
       ShoppingBasket, 
       User, 
       Youtube
} from "lucide-react"
import { FC } from "react"

type Props = {
    className?: string
    size?: number
}

export const MapIcon:FC<Props>=({className,size})=><MapPin className={className} size={size} />

export const ChevronUpIcon:FC<Props>=({className,size})=> <ChevronUp className={className} size={size} />
export const ChevronRightIcon:FC<Props>=({className,size})=> <ChevronRight className={className} size={size} />
export const ChevronDownIcon:FC<Props>=({className,size})=> <ChevronDown className={className} size={size} />
export const ChevronLeftIcon:FC<Props>=({className,size})=> <ChevronLeft className={className} size={size} />

export const CatalogIcon:FC<Props>=({className,size})=> <GalleryVerticalEnd className={className} size={size} />
export const SearchIcon:FC<Props>=({className,size})=> <Search className={className} size={size} />
export const UserIcon:FC<Props>=({className,size})=> <User className={className} size={size} />
export const WishesIcon:FC<Props>=({className,size})=> <Heart className={className} size={size} />
export const CartIcon:FC<Props>=({className,size})=> <ShoppingBag className={className} size={size} />
export const ShoppingIcon:FC<Props>=({className,size})=> <ShoppingBasket className={className} size={size} />

export const InstagramIcon:FC<Props>=({className,size})=> <Instagram className={className} size={size} />
export const FacebookIcon:FC<Props>=({className,size})=> <Facebook className={className} size={size} />
export const YouTubeIcon:FC<Props>=({className,size})=> <Youtube className={className} size={size} />
