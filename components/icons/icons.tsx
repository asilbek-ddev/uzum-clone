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
    X,
    Youtube
} from "lucide-react"
import { FC } from "react"

type Props = {
    className?: string
    size?: number,
    stroke?: string
}

export const MapIcon: FC<Props> = ({ className, size, stroke }) => <MapPin className={className} size={size} stroke={stroke} />

export const ChevronUpIcon: FC<Props> = ({ className, size, stroke }) => <ChevronUp className={className} size={size} stroke={stroke} />
export const ChevronRightIcon: FC<Props> = ({ className, size, stroke }) => <ChevronRight className={className} size={size} stroke={stroke} />
export const ChevronDownIcon: FC<Props> = ({ className, size, stroke }) => <ChevronDown className={className} size={size} stroke={stroke} />
export const ChevronLeftIcon: FC<Props> = ({ className, size, stroke }) => <ChevronLeft className={className} size={size} stroke={stroke} />

export const CatalogIcon: FC<Props> = ({ className, size, stroke }) => <GalleryVerticalEnd className={className} size={size} stroke={stroke} />
export const CloseIcon: FC<Props> = ({ className, size, stroke }) => <X className={className} size={size} stroke={stroke} />
export const SearchIcon: FC<Props> = ({ className, size, stroke }) => <Search className={className} size={size} stroke={stroke} />
export const UserIcon: FC<Props> = ({ className, size, stroke }) => <User className={className} size={size} stroke={stroke} />
export const WishesIcon: FC<Props> = ({ className, size, stroke }) => <Heart className={className} size={size} stroke={stroke} />
export const CartIcon: FC<Props> = ({ className, size, stroke }) => <ShoppingBag className={className} size={size} stroke={stroke} />
export const ShoppingIcon: FC<Props> = ({ className, size, stroke }) => <ShoppingBasket className={className} size={size} stroke={stroke} />

export const InstagramIcon: FC<Props> = ({ className, size, stroke }) => <Instagram className={className} size={size} stroke={stroke} />
export const FacebookIcon: FC<Props> = ({ className, size, stroke }) => <Facebook className={className} size={size} stroke={stroke} />
export const YouTubeIcon: FC<Props> = ({ className, size, stroke }) => <Youtube className={className} size={size} stroke={stroke} />
