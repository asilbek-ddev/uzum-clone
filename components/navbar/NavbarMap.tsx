import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"

const NavbarMap = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant={"outline"}
                        className="flex items-center justify-center gap-x-0.5 bg-transparent border-transparent shadow-none hover:bg-transparent p-0! cursor-pointer">
                        {/* <MapIcon className="size-5" /> */}   {/*Svg quyiladi*/}
                        <span className="font-medium">Toshkent</span>
              {/* <ChevronDownIcon className="size-5" /> */} {/*Svg quyiladi*/}
                    </Button>
                </DialogTrigger>
        <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex flex-col gap-5">
                            <span className="text-[20px]">Shaharni tanlang</span>
                            <div className="relative">
                                {/* <SearchIcon className="absolute top-3 left-3 size-5" /> */} {/*Svg quyiladi*/}
                                <Input className="h-11 pl-10 text-[17px]! placeholder:text-[17px]" placeholder={"Shaharni topish"} />
                            </div>
                        </DialogTitle>
                        <DialogDescription className="flex flex-col scroll-smooth">
                            <span className="text-[20px]"></span>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NavbarMap