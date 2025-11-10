import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../ui/select"

const NavbarLanguage = () => {
    return (
        <Select>
            <SelectTrigger className="w-[90px] border-none shadow-none cursor-pointer pr-0">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="uzb" className="cursor-pointer">Uzbek</SelectItem>
                <SelectItem value="rus" className="cursor-pointer">Rus</SelectItem>
                <SelectItem value="eng" className="cursor-pointer">English</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default NavbarLanguage