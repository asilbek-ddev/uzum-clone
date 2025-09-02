import React from 'react'

const page = () => {
    return (
        <div className='containers mt-5'>
            <div className='flex flex-col gap-2.5 w-full min-h-screen'>
                <h2 className='text-3xl'>Savollar va javoblar</h2>
                <div className='flex flex-col w-[100%] py-5 gap-2.5'>
                    <div>
                        <h2 className='text-2xl font-semibold text-center'>Ro'yxatdan o'tish</h2>
                        <p>Buyurtmani rasmiylashtirib to’lovni bajarish uchun siz ro'yxatdan o’tishingiz kerak bo'ladi. Uning yordamida ma'lumotlarni doimiy ravishda to'ldirishingiz shart bo’lmaydi. Ro'yxatdan o'tish vaqti 3 daqiqadan oshmaydi.</p>
                    </div>
                    <h3 className='text-lg font-semibold'>Qanday qilib ilovada ro'yxatdan o'tish mumkin?</h3>
                    <div>
                        <p>Uzum Market ilovasini yuklab oling:</p>
                        <p>- <b>App Storeda:</b> <a href="https://clck.ru/367gQC" className='hover:text-blue-500 transition-all underline'>https://clck.ru/367gQC</a>,</p>
                        <p>- <b>Google Play Market</b> <a href="https://clck.ru/367gTR" className='hover:text-blue-500 transition-all underline'>https://clck.ru/367gQC</a>.</p>
                    </div>
                    <p>Ilovaga kirib <b>«Kirish»</b> tugmasini bosing va telefon raqamingizni kiriting, <b>«Kodni qabul qilish»</b> tugmasini bosing. Sizga 4 xonali tasdiqlash kodi keladi, kodni kiritasiz va o’z shaxsiy kabinetingizga kirasiz.</p>
                    <ul>
                        <li>So’ng, ekranni yuqori o’ng qismidagi sozlama tugmasini ⚙️ bosasiz va ushbu ma’lumotlarni kiritasiz:</li>
                        <li>- Familiya, ism, sharif;</li>
                        <li>- Telefon raqami;</li>
                        <li>- Elektron pochta manzili(agar istasangiz);</li>
                        <li>- Tug’ilgan sana;</li>
                        <li>- Jinsingizni kiritib <b>«Saqlash»</b> tugmasini bosasiz.</li>
                    </ul>
                    <p>Shaxsiy kabinetdan chiqib ketish uchun, kabinet past qismida joylashgan <b>«Chiqish»</b> tugmasini bosasiz.</p>
                    <h3 className='text-lg font-semibold'>Qanday qilib saytda ro’yxatdan o’tish mumkin?</h3>
                    <p>Bizning <a href="https://uzum.uz/uz" className='hover:text-blue-500 transition-all underline'><b>uzum.uz</b></a> sahifamizga kirib <b>«Kirish»</b> tugmasini bosing, bu ekranning o’ng taraf yuqori qismda bo’ladi. Telefon raqamingizni kiriting, <b>«Kodni qabul qilish»</b> tugmasini bosing. Sizga 4 xonali tasdiqlash kodi keladi, kodni kiritasiz va o’z shaxsiy kabinetingizga kirasiz.</p>
                    <ul>
                        <li>So’ng, ekranni yuqori chap qismida sozlama tugmasini ⚙️ bosasiz va ushbu ma’lumotlarni kiritasiz:</li>
                        <li>- Familiya, ism, sharif;</li>
                        <li>- Telefon raqami;</li>
                        <li>- Elektron pochta manzili(agar istasangiz);</li>
                        <li>- Tug’ilgan sana;</li>
                        <li>- Jinsingizni kiritib <b>«Saqlash»</b> tugmasini bosasiz.</li>
                    </ul>
                    <p>Shaxsiy kabinetdan chiqib ketish uchun, o’ng qismda joylashgan ismingiz ustiga bosasiz va <b>«Sozlamalar»</b> qismiga kirib <b>«Tizimdan chiqib ketish»</b> tugmasini bosasiz.</p>
                    <h3 className='text-lg font-semibold'>Uzum ID nima?</h3>
                    <p>Bu Uzum xizmatlariga kirish uchun yagona avtorizatsiya xizmatidir.</p>
                    <h3 className='text-lg font-semibold'>Menda Uzum ID bormi?</h3>
                    <p>Agar siz <b>Uzum Market</b>, <b>Uzum Bank</b>dan yoki <b>Uzum Tezkor</b>dan foydalangan bo‘lsangiz - demak, sizda <b>Uzum ID</b> mavjud, qo‘shimcha hech narsa rasmiylashtirish yoki yaratishning hojati yo‘q.</p>
                    <h3 className='text-lg font-semibold'>Uzum ID yordamida qanday kirish mumkin?</h3>
                    <p>Buning uchun <b>Uzum Market</b>, <b>Uzum Bank</b> yoki <b>Uzum Tezkor</b> ilovalarini ishga tushirish, telefon raqamini kiritish va <b>SMS</b> orqali kirishni tasdiqlash kifoya.</p>
                    <h3 className='text-lg font-semibold'>Uzum ID bilan kirish xavfsizmi?</h3>
                    <p>Ha, <b>Uzum ID</b>dagi ma’lumotlaringiz ishonchli himoyalangan — biz zamonaviy shifrlash usullaridan foydalanamiz va shaxsiy ma’lumotlarni himoya qilish bo‘yicha qonunchilikning barcha talablariga rioya qilamiz.</p>
                    <h2 className='text-2xl font-semibold text-center'>Buyurtmani rasmiylashtirish</h2>
                    <h3 className='text-lg font-semibold'>Qanday buyurtma beriladi?</h3>
                    <ol className='list-decimal pl-5 inline'>
                        <li>Savatga mahsulotlarni qoʻshing.</li>
                        <li>Mahsulot soni va xususiyatlarini tekshiring: masalan, hajmi va rangi.</li>
                        <li>«Rasmiylashtirish» tugmasini bosing.</li>
                        <li>Buyurtmani rasmiylashtirish boʻlimida yetkazib berish usulini koʻrsating - mahsulot tarqatish punktiga yoki kuryer orqali.</li>
                        <li>Buyurtma beruvchining ma’lumotlarini kiriting va tekshiring. Nima uchun bu muhim: sizning telefoningizga buyurtma berish kodi keladi. Ma’lumotda ko’rsatilgan ism va familiya - pasportdagi bilan bir xil bo’lishi kerak. Agar siz promokod qo’llagan holda va buyurtmangiz ichida 18+ kategoriya mahsulot bo’lsa, siz ko’rsatgan ma’lumotlar pasport ma’lumoti bilan solishtiriladi.</li>
                        <li>Agar promokodingiz bo’lsa, uni qo’llang, faol promokodlarni bizning rasmiy sahifalarimiz va <a href="https://uzum.uz/uz" className='hover:text-blue-500 transition-all underline'>https://uzum.uz/uz</a> da, SMS va PUSH-xabarnomalarida kuzatib boring.</li>
                        <li>Sizga qulay bo’lgan:</li>
                        <li className='inline'>
                            <ul className='list-disc'>
                                <li>Onlayn to’lov;</li>
                                <li>Uzum Nasiya muddatli to’lov;</li>
                                <li>Qabul qilish vaqtida Uzcard, Humo, Visa, Mastercard kartalari va naqd pul asosida to’lov turini tanlang.</li>
                            </ul>
                        </li>
                        <li>Agar siz keyinroq to’lashga qaror qilsangiz, buyurtma yana 30 daqiqa ichida zaxirada boʻladi</li>
                        <li>Elektron xarid cheki.</li>
                        <li className='inline'>
                            <ul className='list-disc'>
                                <li>onlayn to'lovni amalga oshirayotganda elektron xarid cheki ilovada buyurtma raqami ostida buyurtma olingandan keyin mavjud bo'ladi;</li>
                                <li>buyurtma muddatli to’lovga olinganda elektron xarid cheki ilovada buyurtma raqami ostida buyurtma olingandan va shartnoma faollashgandan keyin mavjud bo'ladi;</li>
                                <li>FastPay/QR-pass orqali to'lashda elektron xarid cheki ilovada buyurtma raqami ostida buyurtma olingandan keyin mavjud bo'ladi;</li>
                                <li>buyurtma to’lovi qabul qilingandan keyin amalga oshirilsa , ilovada elektron xarid cheki ko'rsatilmaydi, chunki qog'oz cheki joyida beriladi.</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Qanday qilib tez va qulay tarzda buyurtma berishni ushbu <b><a href="https://drive.google.com/file/d/1UeBFz3aeQMCA1NepBxgjx_bZbdEATP4l/view?usp=share_link" className='hover:text-blue-500 transition-all underline'>havola</a></b> orqali o’tib ko’rishingiz mumkin.</p>
                    <h3 className='text-lg font-semibold'>Buyurtma va promokod zaxirasi qanday ishlaydi?</h3>
                    <p>Agar siz buyurtmani rasmiylashtirib onlayn to’lov yoki muddatli to’lov turini tanlagan bo’lsangiz, ammo to’lov bajarilmagan bo’lsa, buyurtmangiz 30 daqiqaga ichida bekor qilinadi. Bu vaqtda tanlangan mahsulotlar va kiritilgan promokod boshqa qo’llanish uchun mavjud boʻlmaydi.</p>
                    <p>«Mening buyurtmalarim» boʻlimida siz to’lovni yakunlashingiz yoki buyurtmani bekor qilishingiz mumkin. Buyurtmani bekor qilganingizda, savatga solingan mahsulotlar va promokod qayta tiklanadi.</p>
                    <h3 className='text-lg font-semibold'>Rasmiylashtirilgan buyurtmaga mahsulotni qanday qoʻshish yoki olib tashlash mumkin?</h3>
                    <p> Biz buyurtmalarni juda tez yig’amiz va jo’natamiz — buyurtmani rasmiylashtirish va yig’ish o’rtasida bir necha daqiqa vaqt bo’ladi. Shuning uchun biz berilgan va to’langan buyurtmadan texnik jihatdan mahsulotni qo’sha yoki olib tashlay olmaymiz.</p>
                    <p>Agar siz buyurtmaga qo’shimcha mahsulotlarni qo’shishni istasangiz, ularni alohida qilib buyurtma bering va birinchi berilgan buyurtma bilan olib keting. Agar siz ayrim mahsulotlarni bekor qilmoqchi bo’lsangiz, buyurtma olib ketish vaqtida ulardan voz kechishingiz mumkin.</p>
                    <h3 className='text-lg font-semibold'>Buyurtma qancha muddat saqlanadi?</h3>
                    <p>Buyurtma tarqatish punktiga kelib tushgan kundan boshlab 6 kun saqlanadi.</p>
                    <p>Agar buyurtmani olib ketishga ulgurmayotgan bo’lsangiz, bizning <a href="" className='hover:text-blue-500 transition-all underline'><b>qo’llab-quvvatlash xizmatimizga</b></a> murojaat qiling. Saqlash muddatini yana 7 kunga uzaytirishimiz mumkin, va shunda uning maksimal saqlash muddati 13 kalendar kunni tashkil etadi.</p>
                    <h3 className='text-lg font-semibold'>Rasmiylashtirilgan buyurtmani qanday bekor qilish mumkin?</h3>
                    <p>Biz buyurtmalar juda tez yig'amiz va jo'natamiz, shuning uchun siz tizimda buyurtma berilgan paytdan boshlab uni faqat 5 daqiqa ichida bekor qilishingiz mumkin. 5 daqiqadan so'ng, biz buyurtma berish joyiga yoki belgilangan shaharga yetib kelganidan keyingina bekor qilib bera olamiz.</p>
                    <p>Buyurtmani bekor qilish imkoniyatini aniqlash uchun bizning <a href="" className='hover:text-blue-500 transition-all underline'><b>qo’llab-quvvatlash xizmatimizga</b></a> murojaat qiling.</p>
                    <h2 className='text-2xl font-semibold text-center'>Yetkazib berish</h2>
                    <h3 className='text-lg font-semibold'>Yetkazib berishning qanday usullari mavjud?</h3>
                    <p><b>Buyurtma tarqatish punktigacha yetkazib berish:</b> Uzum Market buyurtma tarqatish punktiga yetkazib berish narxi buyurtma rasmiylashtirish paytida ko'rsatiladi. Shuningdek buyurtmani rasmiylashtirish jarayonida aks ettirilgan kerakli miqdorga buyurtma bersangiz, yetkazib berish bepul bo'ladi.</p>
                    <p><b>Kuryer orqali yetkazib berish:</b> kuryer orqali yetkazib berish narxi 30 000 so'm. Ammo, savatda ko‘rsatilgan summaga buyurtma bersangiz, bizning buyurtma tarqatish punkti mavjud bo'lgan shaharning istalgan burchagiga yetkazib berish bepul.</p>
                    <h3 className='text-lg font-semibold'>Buyurtma qachon yetkazib beriladi?</h3>
                    <div>
                        <b>Mahsulot tarqatish punktlari -</b>
                        <p>buyurtmani yetkazib berish sanasi to'lov bosqichida va buyurtmaning profilida ko'rsatiladi.*</p>
                        <p>*Katta hajmdagi mahsulotlar faqat Uzum Marketning o'z tarqatish punktlariga yoki kuryer orqali uyga yetkazib berilishi mumkin. Pochta va supermarketlardagi hamkor tarqatish punktlariga bunday mahsulotlar yetkazib berilmaydi.</p>
                    </div>
                    <p><b>Kuryerlar</b> buyurtmalarni 10:00 dan 22:00 ga qadar tarqatishadi. Buyurtma rasmiylashtirish vaqtida mavjud bo’lgan yetkazib berish oraliq vaqti ko’rsatiladi.</p>
                    <p>Agar kuryer yetkazib berishni amalga oshirayotganda, siz o'zingizning shahringiz tashqarisidagi manzilni ko'rsatgan bo’lsangiz, biz shahar ichidagi yangi manzilni aniqlashtirish uchun siz bilan bog'lanamiz.*</p>
                    <h3 className='text-lg font-semibold'>Belgilangan mahsulot tarqatish punktini qanday o’zgartirish mumkin?</h3>
                    <p>Biz buyurtmalarni juda tez yigʻamiz va joʻnatamiz, shuning uchun buyurtma berilgan vaqtdan boshlab 5 daqiqa ichida yetkazib berish punktining manzilini oʻzgartirish mumkin. Buning uchun bizning <a href="" className='hover:text-blue-500 transition-all underline'><b>qo’llab-quvvatlash xizmatimiz</b></a> bilan bog’laning. Darhol buyurtma raqami va buyurtmani olish uchun qulay bo’lgan yetkazib berish punktining manzilini ayting — biz uni u yerga yoʻnaltiramiz.</p>
                    <p>Agar 5 daqiqa ichida ulgurmagan bo’lsangiz, kerakli yetkazib berish punktiga yangi buyurtma qiling va eskisini qo’llab-quvvatlash xizmati orqali bekor qiling.</p>
                    <h3 className='text-lg font-semibold'>Kuryer orqali yetkazib berish sanasini qanday o'zgartirish mumkin?</h3>
                    <p>Yetkazib berish kuni ertalab soat 9:00 gacha biz bilan bog'laning va biz kuryer buyurtmani olib keladigan manzilni o'zgartirish imkoniyatini ko’rib chiqamiz. Agar siz ertalab soat 9:00 dan keyin murojaat qilsangiz, yangi manzilga yetkazib berish ertasi kuni amalga oshiriladi. Ikkala holatda ham <a href="" className='hover:text-blue-500 transition-all underline'><b>qo’llab-quvvatlash xizmatimiz</b></a> bilan bog’laning.</p>
                    <h3 className='text-lg font-semibold'>Kuryerlik yetkazib berish sanasini qanday o'zgartirish mumkin?</h3>
                    <p>Biz uni bir necha kun keyinga ko'chirishimiz mumkin. Buning uchun bizning <a href="" className='hover:text-blue-500 transition-all underline'><b>qo’llab-quvvatlash xizmatimiz</b></a> bilan bog’laning.</p>
                    <h3 className='text-lg font-semibold'>Kuryer orqali yetkazib berish uchun ko'rsatilgan telefon raqamini qanday o'zgartirish mumkin?</h3>
                    <p>Bizning <a href="" className='hover:text-blue-500 transition-all underline'><b>qo’llab-quvvatlash xizmatimiz</b></a> bilan bog'laning va kuryer yetkazib berishni muvofiqlashtirishi mumkin bo'lgan joriy raqamingizni ayting.</p>
                    <h2 className='text-2xl font-semibold text-center'>To'lov</h2>
                    <p>Sizga qulay bo’lgan to’lov uslubini tanlashingiz mumkin:</p>
                    <ul className='list-item'>
                        <li>- Uzcard, Humo kartalaridan buyurtma uchun onlayn to’lov bajaring;</li>
                        <li>- Uzum Nasiya muddatli to’lovi orqali buyurtma rasmiylashtiring;</li>
                        <li>- qabul qilish vaqtida Uzcard, Humo, Visa, Mastercard kartalari va naqd pul asosida to’lovni amalga oshiring.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Onlayn-to’lov</h3>
                    <p>Siz buyurtma uchun to’lovni Uzcard, Humo kartalari orqali bajarishingiz mumkin.</p>
                    <p>Onlayn to’lov vaqtida siz to’lov chekini ilova shaxsiy kabinet <b>«Mening buyurtmalarim»</b> bo’limida <b>«Elektron chek»</b> tugmasini bosib olishingiz mumkin.</p>
                    <h3 className='text-lg font-semibold'>Uzum Nasiya muddatli to’lovi</h3>
                    <p>Siz Uzum Nasiya muddatli to'lov tizimidan foydalanishingiz va buyurtmani qismlarga bo'lib to'lashingiz mumkin: 3 oy, 6 oy va 12 oy. Buyurtmaning minimal miqdori - 35 000 so’m.</p>
                    <p>To'lov cheki buyurtma qabul qilingandan so'ng shaxsiy kabinetingizda paydo bo'ladi - <b>«Elektron chek»</b>.</p>
                    <h3 className='text-lg font-semibold'>Mahsulotni qabul qilganda to’lov uslubi</h3>
                    <p>Buyurtmani naqd pul yoki Uzcard, Humo, MasterCard va Visa orqali qabul qilish jarayonida to'lashingiz mumkin.</p>
                    <p>Elektron xarid cheki faqat quyidagi usullar orqali to'langan buyurtmalar uchun olinganidan keyin ko'rsatiladi:</p>
                    <ul>
                        <li>- FastPay/QR-pass orqali to’langanda;</li>
                        <li>- naqd pul yoki Humo kartasi orqali to’langanda.</li>
                    </ul>
                    <p>Uzcard, Visa, Mastercard kartalari bilan to'lashda xarid cheklari buyurtma olingandan so'ng darhol beriladi. Elektron chek ko'rsatilmaydi.</p>
                    <h2 className='text-2xl font-semibold text-center'>Uzum Nasiya muddatli to'lovi</h2>
                    <h3 className='text-lg font-semibold'>Muddatli to’lov haqida</h3>
                    <div>
                        <p>Uzum Nasiya muddatli to'lovining afzalliklari:</p>
                        <ul className='list-decimal pl-5'>
                            <li>Dastlabki to'lovsiz.</li>
                            <li>Oldindan to'lab yopish imkoniyati mavjud.</li>
                            <li>Qulay to'lov muddatlari: 3, 6 , 12 yoki 24 oy.</li>
                            <li>Hamkorimiz Uzum Nasiya tomonidan barcha to'lov muddatlari uchun ishlatilishi mumkin bo'lgan xaridlar uchun miqdor ajratiladi.</li>
                        </ul>
                    </div>
                    <h3 className='text-lg font-semibold'>Muddatli to'lovga xaridlar uchun qancha miqdor ajratiladi?</h3>
                    <ul>
                        <li>- 800 000 so'm, agar pasport yoki ID-karta ma'lumotlarini kiritib, identifikatsiyadan o'tsangiz;</li>
                        <li>- 25 000 000 so'mgacha, agar karta raqamini kiritib, ikki yaqin insonning kontaktlarini ko'rsatsangiz.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Muddatli to'lov shartlari:</h3>
                    <ul className='list-decimal pl-5'>
                        <li>Siz 20 yoshdan 65 yoshgacha bo'lishingiz kerak.</li>
                        <li>Uzum Marketda ro'yxatdan o'tgan telefon raqamingiz va SMS-xabarnomalar uchun karta raqamingizga ulangan telefon raqamingiz bir xil bo'lishi kerak.</li>
                        <li>Buyurtmaning eng kam miqdori 35 000 so 'm bo' lishi kerak.</li>
                        <li>3 oylik muddatli to'lov tanlanganda, bir xarid miqdori 5 000 000 so'mdan oshmasligi kerak.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Muddatli to’lovni qanday rasmiylashtirish kerak?</h3>
                    <ul className='list-decimal pl-5'>
                        <li>Uzum Market ilovasida ro'yxatdan o'ting.</li>
                        <li>Kerakli mahsulotlarni savatga soling va <b>«Rasmiylashtirish»</b> tugmasini bosing.</li>
                        <li>Qabul qilish usuli va shaharini tanlang:</li>
                        <li className='inline'>
                            <ul className='list-disc'>
                                <li> Buyurtmani Uzum Market tarqatish punktiga yetkazib berish bepul.</li>
                                <li> Kuryer orqali yetkazib berish 30 000 so'm, qabul qilish paytida karta yoki naqd pul orqali alohida to‘lanadi. Ammo savatda ko‘rsatilgan summaga buyurtma bersangiz, yetkazib berish mutlaqo bepul.</li>
                            </ul>
                        </li>
                        <li>Buyurtma oluvchini ko'rsating (buyurtmani muddatli to'lov nomiga rasmiylashgan inson olib ketishi mumkin).</li>
                        <li>To'lov usulida kerakli muddatga muddatli to'lovni tanlang: 3, 6 , 12 yoki 24 oy va <b>«Anketani to'ldiring»</b> ni bosing. Shuni ta'kidlash kerakki, 3 oylik muddatli to'lovni tanlaganingizda bir xarid miqdori 5 000 000 so'mdan oshmasligi kerak.</li>
                        <li>Anketada:</li>
                        <li className='inline'>
                            <ul className='list-disc'>
                                <li>Pasport yoki ID-karta ma'lumotlarini kiriting;</li>
                                <li>Selfi olish orqali shaxsingizni tasdiqlang (kameradan foydalanish uchun ruxsat yoqilganligini tekshiring);</li>
                                <li>Shaxsingiz tasdiqlangandan so'ng, siz 800 000 so'm miqdor olishingiz mumkin yoki olingan miqdorni «Limitni oshirish» tugmasini bosish orqali 25 000 000 so'mgacha oshirishingiz mumkin;</li>
                                <li>Limitni oshirish uchun oxirgi 3 oyda ishlab turgan Humo yoki UzCard kartasini biriktirishingiz kerak;</li>
                                <li>Uzum Marketda ro'yxatdan o'tgan telefon raqamingiz va SMS-xabarnomalar uchun karta raqamingizga ulangan telefon raqamingiz bir xil bo'lishi kerak;</li>
                                <li>Karta qo'shilgandan so'ng sizga yaqin bo'lgan ikki kishining aloqa ma'lumotlarini ko'rsating;</li>
                            </ul>
                        </li>
                        <li>Muddatli to'lov uchun miqdor olganingizdan so'ng, savatni va to'ldirilgan maydonlarni qayta tekshirishingiz kerak.</li>
                        <li><b>«Muddatli to'lov orqali to'lash»</b> tugmasini bosing.</li>
                        <li>Shartnomani faollashtiring va imzolang.</li>
                        <li>Shartnoma faollashtirilishini va buyurtmangiz qabul qilinganligi haqidagi oyna paydo bo'lishini kuting.</li>
                    </ul>
                    <h2 className='text-2xl font-semibold text-center'>Buyurtmani qabul qilish</h2>
                    <h3 className='text-lg font-semibold'>Buyurtma holatini qanday kuzatishim mumkin</h3>
                    <p>Buyurtma holatini kuzatish mumkin. U ilovaning <b>«Mening buyurtmalarim»</b> bo’limi <b>«Barchasi»</b> qismida bo’ladi. Buyurtmalar yetkazib berishning bir necha bosqichlaridan o'tadi:</p>
                    <ul className='list-decimal pl-10'>
                        <li><b>«To'lovni kutmoqda»</b> - siz buyurtma berdingiz, lekin to'lovni tugatmadingiz yoki to'lovni amalga oshirmadingiz.</li>
                        <li><b>«Yig’ilmoqda»</b> - biz mahsulotni omborda jamlayapmiz va jo'natishga tayyorlayapmiz.</li>
                        <li><b>«Yetkazilmoqda»</b> - buyurtma yo'lda.</li>
                        <li><b>«Olib ketish mumkin»</b> - buyurtma qabul qilish punktiga keldi.</li>
                        <li><b>«Xaridorga topshirildi»/«Qaytarildi»</b> - mahsulotlar sizda yoki siz buyurtmadan voz kechdingiz.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Buyurtmani qanday qabul qila olaman?</h3>
                    <p>Quyidagi usullardan biri bilan:</p>
                    <ul className='list-decimal pl-10'>
                        <li>Ilovada buyurtma qabul qilish kodini tarqatish punkti ma'muriga ko'rsating. Kod ilovada sizning kabinetingiz «Mening buyurtmalarim» bo'limida, so'ng <b>«Buyurtmani qabul qilish»</b> tugmasi ostida bo’ladi.</li>
                        <li>SMS-xabar orqali buyurtma raqami va SMS yoki Push-xabarda sizga yuborilgan qabul qilish kodini ayting.</li>
                    </ul>
                    <ul>
                        <li>Nima uchun sizdan pasport yoki boshqa hujjatni ko'rsatishingizni so'raymiz:</li>
                        <li>- siz muddatli to’lov usuli bilan buyurtmani rasmiylashtirgansiz;</li>
                        <li>- promokod ishlatilgansiz;</li>
                        <li>- boshqa odamdan buyurtmani olib ketishini so'ragansiz - bu holda sizga haqiqiy oluvchining pasporti kerak bo'ladi (muddatli to’lov bundan istisno);</li>
                        <li>- yosh chegarasi bor tovarga buyurtma berganingizda.</li>
                    </ul>
                    <h2 className='text-2xl font-semibold text-center'>Mahsulot</h2>
                    <h3 className='text-lg font-semibold'>Mahsulot bo’yicha maslahat</h3>
                    <p>Siz mahsulot tavsifida mahsulotning xususiyatlari, shuningdek, uni qanday qilib to'g'ri ishlatish haqida o'qishingiz yoki sotuvchidan ma'lumotni aniqlab olishingiz mumkin.</p>
                    <ul>
                        <li>Buning uchun Uzum Market mobil ilovasida sizni qiziqtirgan mahsulotni tanlang, pastroqqa tushing va <b>«Sotuvchiga savol berish»</b> yoki <b>«Sotuvchidan so'rash»</b> tugmasini bosing.</li>
                        <li>Agar sotuvchi sizga bir kun ichida javob bermasa, bizning <a href="" className='hover:text-blue-500 transition-all underline'><b>qo'llab qo'vvatlash xizmati</b></a> bilan bog’laning. Biz, albatta, sotuvchi javobini tezlashtiramiz.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Bir qo’lga sotuvi cheklangan mahsulotlar</h3>
                    <p>Marketpleysda bir qo'lga sotuvi cheklangan mahsulotlar mavjud. Bunday tovarlarni bir qo'lga(bitta foydalanuvchiga) faqat mahsulot kartasida/fotosuratida ko'rsatilgan miqdorda sotib olish mumkin: bir kishiga 1 tovar, bir kishiga 2-3 tovar.</p>
                    <h2 className='text-2xl font-semibold text-center'>Sifatiga e’tiroz bo’lmagan mahsulotni qaytarish</h2>
                    <h3 className='text-lg font-semibold'>Qaytarish shartlari</h3>
                    <ul>
                        <li>Mahsulot sifatiga e’tiroz bo’lmagan mahsulotni qabul qilguncha, tarqatish punktida yoki kuryer orqali qabul qilish vaqtingizda qaytarishingiz mumkin bo’ladi.</li>
                        <li>Qolgan barcha holatlarda, mahsulot sifatiga e’tiroz bo’lmasa, mahsulotni qabul qilgan kundan boshlab 10 kun ichida tarqatish punktiga olib keling.</li>
                        <li>Tarqatish punkti ma’muri mahsulot ishlatilmagani, shtrix-kod qadog’i saqlangani va to’liqligini va tovar ko’rinishi saqlanganini tekshirib oladi.</li>
                    </ul>
                    <p>Tekshirish vaqtida ishlatilish izlari yo’qligiga asoslanib mahsulotning tashqi ko’rinishi saqlanganligi aniqlanadi. <b>E’tibor bering:</b> sifatli oziq-ovqat mahsulotlari, hatto qadoq ochilmagan bo‘lsa ham, qaytarib olinmaydi va almashtirilmaydi.</p>
                    <h4 className='font-semibold'>Qonunchilik ro'yxatiga muvofiq quyidagi sifatli tovarlar qaytarib olinmaydi:</h4>
                    <ul className='list-decimal pl-5'>
                        <li>Uy sharoitlarida kasalliklarni profilaktika qilish va davolash uchun tovarlar (metall, rezina, to‘qimachilik va boshqa materiallardan tayyorlangan sanitariya va gigiyena buyumlari, tibbiy buyumlar, priborlar va apparatlar, og‘iz bo‘shlig‘i gigiyenasi vositalari, ko‘zoynak linzalari, bolalarni parvarish qilish buyumlari, dori vositalari).</li>
                        <li>Shaxsiy gigiyena buyumlari (tish cho‘tkalari, taroqlar, soch to‘g‘nog‘ichlar, soch bigudilari, ulama sochlar, shinonlar) va boshqa shu kabi tovarlar.</li>
                        <li>Attorlik-pardoz tovarlari.</li>
                        <li>To‘qimachilik tovarlari (ip-gazlama, zig‘ir tolali, ipak, jun va sintetik gazlamalar, gazlama tusidagi noto‘qima materiallardan tayyorlangan tovarlar — lentalar, jiyaklar, to‘rlar va boshqalar); kabel mahsulotlari (simlar, shnurlar, kabellar); qurilish va pardozlash materiallari (linoleum, plyonka, gilam qoplamalar va boshqalar) hamda metrlab sotiladigan boshqa tovarlar.</li>
                        <li>Tikuvchilik va trikotaj buyumlari (tikuvchilik buyumlari va trikotaj ichki kiyimlar, paypoq va qo‘lqop buyumlari).</li>
                        <li>Polimer materiallardan tayyorlangan, oziq-ovqat materiallari bilan bog‘liq bo‘lgan, shu jumladan bir marta foydalaniladigan buyum va materiallar (oshxona va kuxnya idish-tovoqlari va anjomlari, oziq-ovqat mahsulotlarini saqlash va tashish uchun idishlar va o‘rov materiallari).</li>
                        <li>Maishiy kimyo tovarlari, pestitsidlar va agroximikatlar.</li>
                        <li>Mebel (mebel garniturlari va to‘plamlari).</li>
                        <li>Qimmatbaho toshlardan foydalangan holda qimmatbaho metallardan tayyorlangan, yarim qimmatbaho va sintetik toshlardan foydalangan holda qimmatbaho metallardan tayyorlangan buyumlar, silliqlangan qimmatbaho toshlar</li>
                        <li>Avtomobillar va motovelotovarlar, ularga tirkamalar va nomerli agregatlar; qishloq xo‘jaligi ishlari uchun kichik mexanizatsiya ko‘chma vositalari; sayr qilish qayiqlari va boshqa maishiy suzish vositalari.</li>
                        <li>Kafolat muddatlari belgilangan texnik jihatdan murakkab maishiy tovarlar (metall qirquvchi va yog‘ochga ishlov beruvchi maishiy dastgohlar; maishiy elektr mashinalari va maishiy elektr priborlari; maishiy radioelektron apparat; maishiy hisoblash va ko‘paytirish texnikasi; foto va kinoapparatlar; telefon apparatlari va faksimil apparati; elektr musiqa asboblari; elektron o‘yinchoqlar).</li>
                        <li>Hayvonlar va oʻsimliklar.</li>
                    </ul>
                    <h2 className='text-2xl font-semibold text-center'>Sifatiga eʻtiroz boʻlgan mahsulotni qaytarish</h2>
                    <h3 className='text-lg font-semibold'>Texnik jihatdan murakkab mahsulotlar</h3>
                    <p>Texnik jihati murakkab bo’lgan mahsulot sifatiga e’tiroz bo’lsa, u mahsulot o’rnatilgan kafolat muddati* davomida qabul qilinadi, agar ushbu kafolat muddati bo’lmasa, 6 oy ichida qabul qilinadi.</p>
                    <p>Mahsulotni sizga qulay joylashgan mahsulot tarqatish punktiga olib keling, biz mahsulotni tekshirish uchun uni sotuvchiga yuboramiz, sotuvchi nosozlikni topgan holda uni 20 kun ichida bepul bartaraf etib beradi.**</p>
                    <ul>
                        <li>*Kafolat muddati mahsulot qadog’ida ko’rsatilgan bo’lishi mumkin.</li>
                        <li>**Agar tovarni ishlatilish shartlari buzilmagan bo'lsa, kamchiliklar bartaraf etib beriladi.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Boshqa har qanday mahsulot kategoriyalarini qaytarib berish</h3>
                    <p>Mahsulot sifatiga e’tiroz bo’lgan mahsulotlarni o’rnatilgan kafolat muddati* ichida qaytarish mumkin, agar ushbu kafolat muddati bo’lmasa, 6 oy ichida qabul qilinadi. Mahsulotni sizga qulay joylashgan mahsulot tarqatish punktiga olib keling, ma’mur mahsulot ishlatilmaganligini tekshirib oladi.</p>
                    <p>E'tibor bering, mahsulot diagnostika uchun qabul qilinishi va ishlab chiqarishdagi nuqson mavjudligini tasdiqlash uchun sotuvchiga topshirilishi mumkin. Sotuvchi 20 kun ichida kamchiliklarni bepul bartaraf etiladi.**</p>
                    <ul>
                        <li>*Kafolat muddati mahsulot qadog’ida ko’rsatilgan bo’lishi mumkin.</li>
                        <li>**Agar tovarni ishlatilish shartlari buzilmagan bo'lsa, kamchiliklar bartaraf etib beriladi.</li>
                    </ul>
                    <h3 className='text-lg font-semibold'>Menga mahsulot kelmadi/ keldi, lekin boshqa mahsulot keldi/ keldi, lekin hammasi emas/ singan keldi</h3>
                    <p>Biz shunga o'xshash so'rovlarni buyurtmani olinganidan boshlab 7 kun ichida qabul qilamiz. Siz qo'llab-quvvatlash xizmatimizga murojaat qilishingiz mumkin va bizning mutaxassislarimiz tekshirib ko’rishadi.</p>
                    <p>Muammoni tasvirlab, buyurtma raqami, mahsulotning fotosuratini va uning shtrix-kodini bizning Telegramdagi qo’llab-quvvatlash xizmatimizga yuboring yoki mahsulotni sizga qulay bo’lgan tarqatish punktiga olib keling — biz, shuningdek, tekshirib ko’ramiz* va natijalari haqida sizga xabar beramiz.</p>
                    <p>*Qo'shimcha tekshiruvni oldini olish uchun buyurtmani qabul qilish vaqtida tekshirishni maslahat beramiz.</p>
                    <h2 className='text-2xl font-semibold text-center'>To’lovni qaytarish</h2>
                    <h3 className='text-lg font-semibold'>Onlayn-to’lovni qaytarish</h3>
                    <h3 className='text-lg font-semibold'>Muddatli to’lov limitining qaytarilishi</h3>
                    <h3 className='text-lg font-semibold'>Qabul qilganda to’lov uslubi to’lovini qaytarish</h3>
                    <h2 className='text-2xl font-semibold text-center'>Sharhlar</h2>
                    <h3 className='text-lg font-semibold'>Qanday qilib sharh qoldirish mumkin?</h3>
                    <h3 className='text-lg font-semibold'>Sharhingiz nashr etilmadimi?</h3>
                    <h2 className='text-2xl font-semibold text-center'>Internet firibgarlar</h2>
                    <h3 className='text-lg font-semibold'>Internetda qanday aldaydilar?</h3>
                    <h3 className='text-lg font-semibold'>Qanday qilib firibgarlar qurboniga aylanib qolmaslik kerak?</h3>
                    <h3 className='text-lg font-semibold'>Agar aldangan bo‘lsam nima qilish kerak?</h3>
                    <h3 className='text-lg font-semibold'>Firibgarlikning qanday turlari mavjud?</h3>
                    <h3 className='text-lg font-semibold'>Uzum Market rasmiy ijtimoiy tarmoqlarini qanday topish mumkin?</h3>
                    <h2 className='text-2xl font-semibold text-center'>«Arzon narxlar kafolati» aksiyasi</h2>
                    <h3 className='text-lg font-semibold'>Arzon narxlar kafolati bu nima?</h3>
                    <h3 className='text-lg font-semibold'>Aksiyada qanday ishtirok etish mumkin?</h3>
                    <h3 className='text-lg font-semibold'>Aksiyada qanday mahsulotlar ishtirok etadi va ular qanday shartlarga mos kelishi kerak?</h3>
                    <h3 className='text-lg font-semibold'>Aksiyada ishtirok etuvchi internet-do‘konlar ro‘yxati</h3>
                    <h3 className='text-lg font-semibold'>Narx farqi qanday qaytariladi?</h3>
                    <h3 className='text-lg font-semibold'>Buyurtma berishdan oldin promokod olish mumkinmi?</h3>
                    <h3 className='text-lg font-semibold'>Promokod olish uchun so‘rov qancha vaqt ko‘rib chiqiladi?</h3>
                    <h3 className='text-lg font-semibold'>Promokodni ishlatishga ulgurmagan bo‘lsam va amal qilish muddati tugagan bo‘lsa, nima bo‘ladi?</h3>
                    <h3 className='text-lg font-semibold'>Aksiyada bir necha marta ishtirok etish mumkinmi?</h3>
                    <h3 className='text-lg font-semibold'>Boshqa internet-do‘kondagi narx vaqtinchalik aksiya/chegirma tufayli past bo‘lsa, kompensatsiya/promokod olish mumkinmi?</h3>
                    <h3 className='text-lg font-semibold'>Agar Uzum kartasi bilan oldindan to‘lov qilishda chegirma tufayli savatdagi mahsulot narxi pasaygan bo‘lsa, taqqoslashda qaysi narxni hisobga olish kerak?</h3>
                    <h3 className='text-lg font-semibold'>@Uzum_support_bot mijozlarni qo‘llab-quvvatlash botiga qanday yozish mumkin?</h3>
                    <h2 className='text-2xl font-semibold text-center'>Sotuvchi yetkazib berishi</h2>
                    <h3 className='text-lg font-semibold'>Sotuvchi yetkazib berishi nima degani?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi yetkazib berishi bilan bo‘lgan tovarni qanday buyurtma qilish mumkin?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi mening hududimga yetkazib berishini qanday bilish mumkin?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi yetkazib berishi bilan bo‘lgan buyurtmaga qanday to‘lov qilinadi?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi buyurtmani qanday yetkazib beradi?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi yetkazib berishi bilan bo‘lgan buyurtmani qanday bekor qilish mumkin?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi bilan qanday bog‘lanish mumkin?</h3>
                    <h3 className='text-lg font-semibold'>Sotuvchi yetkazib berishi bilan bo‘lgan tovar qanday qaytariladi?</h3>
                    <h2 className='text-2xl font-semibold text-center'>Savollaringiz bormi?</h2>
                    <h3 className='text-lg font-semibold'>Biz bilan bog’laning</h3>






























                </div>
            </div>
        </div>
    )
}

export default page
