"use client"

import { useState } from "react"
import Toggle from "../toggles"
import { Button } from "../ui/button"
import { CatalogIcon, CloseIcon } from "../icons/icons"

const NavbarCatalog = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                className="bg-indigo-200 rounded-[5px] text-indigo-500 text-[16px] font-semibold cursor-pointer hover:bg-indigo-300 transition-colors"
            >
                {open ? <CloseIcon /> : <CatalogIcon />} Katalog
            </Button>
            <Toggle isOpen={open} onClose={() => setOpen(false)}>
                Modal Details
            </Toggle>
        </div>
    )
}

export default NavbarCatalog