const { nanoid } = require("nanoid");

const faq = [
    {
        id: nanoid(),
        title: "Ro'yxatdan o'tish",
        description: "Buyurtmani rasmiylashtirib to’lovni bajarish uchun siz ro'yxatdan o’tishingiz kerak bo'ladi. Uning yordamida ma'lumotlarni doimiy ravishda to'ldirishingiz shart bo’lmaydi. Ro'yxatdan o'tish vaqti 3 daqiqadan oshmaydi.",
        chilren: [
            {
                id: nanoid(),
                question: "Qanday qilib ilovada ro'yxatdan o'tish mumkin?",
                answer: [
                    { type: "text", content: "Uzum Market ilovasini yuklab oling: " },
                    { type: "url", content: "- App Storeda: ", url: "https://clck.ru/367gQC" },
                    { type: "url", content: "- Play Marketda: ", url: "https://clck.ru/367gTR" },
                    { type: "text", content: "Ilovaga kirib <<Kirish>> tugmasini bosing va telefon qaramingizni kiriting, <<Kodni qabul qilish>> tugmasini bosing. Sizga 4 xonali tasdiqlash kodi keladi, kodni kiritasiz va o'z shaxsiy kabinetingizga kirasiz." },
                    { type: "text", content: "So’ng, ekranni yuqori o’ng qismidagi sozlama tugmasini ⚙️ bosasiz va ushbu ma’lumotlarni kiritasiz: " },
                    { type: "text", content: "- Familiya, ism, sharif; " },
                    { type: "text", content: "- Telefon raqami; " },
                    { type: "text", content: "- Elektron pochta manzili(agar istasangiz); " },
                    { type: "text", content: "- Tug’ilgan sana; " },
                    { type: "text", content: "- Jinsingizni kiritib «Saqlash» tugmasini bosasiz. " },
                    { type: "text", content: "Shaxsiy kabinetdan chiqib ketish uchun, kabinet past qismida joylashgan «Chiqish» tugmasini bosasiz. " },
                ]
            },

            {
                id: nanoid(),
                question: "Qanday qilib saytda ro'yxatdan o'tish mumkin?",
                answer: [
                    { type: "text", content: "Bizning uzum.uz sahifamizga kirib «Kirish» tugmasini bosing, bu ekranning o’ng taraf yuqori qismda bo’ladi. Telefon raqamingizni kiriting, «Kodni qabul qilish» tugmasini bosing. Sizga 4 xonali tasdiqlash kodi keladi, kodni kiritasiz va o’z shaxsiy kabinetingizga kirasiz. " },
                    { type: "text", content: "So’ng, ekranni yuqori chap qismida sozlama tugmasini ⚙️ bosasiz va ushbu ma’lumotlarni kiritasiz:" },
                    { type: "text", content: "- Familiya, ism, sharif; " },
                    { type: "text", content: "- Telefon raqami; " },
                    { type: "text", content: "- Elektron pochta manzili(agar istasangiz); " },
                    { type: "text", content: "- Tug’ilgan sana; " },
                    { type: "text", content: "- Jinsingizni kiritib «Saqlash» tugmasini bosasiz. " },
                    { type: "text", content: "Shaxsiy kabinetdan chiqib ketish uchun, o’ng qismda joylashgan ismingiz ustiga bosasiz va «Sozlamalar» qismiga kirib «Tizimdan chiqib ketish» tugmasini bosasiz." },
                ]
            },

            {
                id: nanoid(),
                question: "Uzum ID nima?",
                answer: [
                    {
                        type: "text", content: "Bu Uzum xizmatlariga kirish uchun yagona avtorizatsiya xizmatidir.",
                    }
                ]
            },

            {
                id: nanoid(),
                question: "Menda Uzum ID bormi?",
                answer: [
                    {
                        type: "text", content: "Agar siz Uzum Market, Uzum Bank yoki Uzum Tezkordan foydalangan bo‘lsangiz - demak, sizda Uzum ID mavjud, qo‘shimcha hech narsa rasmiylashtirish yoki yaratishning hojati yo‘q.",
                    }
                ]
            },

            {
                id: nanoid(),
                question: "Uzum ID yordamida qanday kirish mumkin?",
                answer: [
                    {
                        type: "text", content: "Buning uchun Uzum Market, Uzum Bank yoki Uzum Tezkor ilovalarini ishga tushirish, telefon raqamini kiritish va SMS orqali kirishni tasdiqlash kifoya.",
                    }
                ]
            },

            {
                id: nanoid(),
                question: "Uzum ID bilan kirish xavfsizmi?",
                answer: [
                    {
                        type: "text", content: "Ha, Uzum IDdagi ma’lumotlaringiz ishonchli himoyalangan — biz zamonaviy shifrlash usullaridan foydalanamiz va shaxsiy ma’lumotlarni himoya qilish bo‘yicha qonunchilikning barcha talablariga rioya qilamiz.",
                    }
                ]
            },
        ]
    },

    {
        id: nanoid(),
        title: "Buyurtmani rasmiylashtirish",
        description: "",
        chilren: [
            {
                id: nanoid(),
                question: "Qanday buyurtma beriladi?",
                answer: [
                    { type: "text", content: "1. Savatga mahsulotlarni qoʻshing.", },
                    { type: "text", content: "2. Mahsulot soni va xususiyatlarini tekshiring: masalan, hajmi va rangi.", },
                    { type: "text", content: "3. «Rasmiylashtirish» tugmasini bosing.", },
                    { type: "text", content: "4. Buyurtmani rasmiylashtirish boʻlimida yetkazib berish usulini koʻrsating - mahsulot tarqatish punktiga yoki kuryer orqali.", },
                    { type: "text", content: "5. Buyurtma beruvchining ma’lumotlarini kiriting va tekshiring. Nima uchun bu muhim: sizning telefoningizga buyurtma berish kodi keladi. Ma’lumotda ko’rsatilgan ism va familiya - pasportdagi bilan bir xil bo’lishi kerak. Agar siz promokod qo’llagan holda va buyurtmangiz ichida 18+ kategoriya mahsulot bo’lsa, siz ko’rsatgan ma’lumotlar pasport ma’lumoti bilan solishtiriladi.", },
                    { type: "url", content: "6. Agar promokodingiz bo’lsa, uni qo’llang, faol promokodlarni bizning rasmiy sahifalarimiz va https://uzum.uz/uz da, SMS va PUSH-xabarnomalarida kuzatib boring.", url: "", },
                    { type: "text", content: "7. Sizga qulay bo’lgan:", },
                    { type: "text", content: "- Onlayn to'lov;", },
                    { type: "text", content: "- Uzum nasiya muddatli to'lov", },
                    { type: "text", content: "- Qabul qilish vaqtida Uzcard, Humo, Visa, Mastercard kartalari va naqd pul asosida to’lov turini tanlang.", },
                    { type: "text", content: "8. Agar siz keyinroq to’lashga qaror qilsangiz, buyurtma yana 30 daqiqa ichida zaxirada boʻladi", },
                    { type: "text", content: "9. Elektron xarid cheki.", },
                    { type: "text", content: "- onlayn to'lovni amalga oshirayotganda elektron xarid cheki ilovada buyurtma raqami ostida buyurtma olingandan keyin mavjud bo'ladi;", },
                    { type: "text", content: "- buyurtma muddatli to’lovga olinganda elektron xarid cheki ilovada buyurtma raqami ostida buyurtma olingandan va shartnoma faollashgandan keyin mavjud bo'ladi;", },
                    { type: "text", content: "- FastPay/QR-pass orqali to'lashda elektron xarid cheki ilovada buyurtma raqami ostida buyurtma olingandan keyin mavjud bo'ladi;" },
                    { type: "text", content: "- buyurtma to’lovi qabul qilingandan keyin amalga oshirilsa , ilovada elektron xarid cheki ko'rsatilmaydi, chunki qog'oz cheki joyida beriladi." },
                    { type: "text", content: "Qanday qilib tez va qulay tarzda buyurtma berishni ushbu havola orqali o’tib ko’rishingiz mumkin." },
                ]
            },
            {
                id: nanoid(),
                question: "",
                answer: [
                    { type: "text", content: "", }
                ]
            },
        ]
    },
    {
        id: nanoid(),
        title: "Yetkazib berish",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "To'lov",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Uzum Nasiya muddatli to'lovi",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Buyurtmani qabul qilish",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Mahsulotlar",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Sifatiga e'tiroz bo'lmagan mahsulotni qaytarish",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Sifatiga e'tiroz bo'lgan mahsulotni qaytarish",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "To'lovni qaytarish",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Sharhlar",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Internet firibgarlar",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "<<Arzon narxlar kafolati>> aksiyasi",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Sotuvchi yetkazib berishi",
        description: "",
        chilren: [

        ]
    },
    {
        id: nanoid(),
        title: "Savollaringiz bormi?",
        description: "",
        chilren: [

        ]
    },
]

export default faq