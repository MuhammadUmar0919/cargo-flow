# Cargo Flow Logistika Loyihasiga Xush Kelibsiz

## Loyiha haqida

**URL**: https://cargo-flow-nine.vercel.app/

## Loyihani qanday tahrirlash mumkin?

Loyihangizni tahrirlashning bir necha yo‘li mavjud:

**Cargo Flow Platformasidan foydalaning**

Shunchaki quyidagi havolaga o‘ting: [Cargo Flow Projekti](https://cargo-flow-nine.vercel.app/) va kodlarni o‘zgartirishni boshlang.

Platforma orqali kiritilgan o‘zgarishlar avtomatik tarzda repozitoriyga qo‘shiladi.

**O‘zingiz yoqtirgan IDE orqali ishlang**

Agar loyihani lokal kompyuteringizda ishlamoqchi bo‘lsangiz, quyidagi amallarni bajaring:

```sh
# 1-qadam: Repozitoriyani Git URL orqali klonlang
git clone <SIZNING_GIT_URL>

# 2-qadam: Loyiha papkasiga o‘ting
cd <SIZNING_LOYIHA_NOMI>

# 3-qadam: Kerakli bog‘lamalarni o‘rnating
npm i

# 4-qadam: Dasturiy serverni ishga tushiring (avtomatik yangilanish bilan)
npm run dev
````

**GitHub orqali to‘g‘ridan-to‘g‘ri faylni tahrir qiling**

* Kerakli faylga o‘ting
* Yuqoridagi “Edit” (qalamcha belgisi) tugmasini bosing
* O‘zgarishlarni kiriting va “Commit changes” tugmasi bilan saqlang

**GitHub Codespaces orqali tahrirlash**

* Repozitoriy asosiy sahifasiga o‘ting
* “Code” tugmasini bosing
* “Codespaces” tabiga o‘ting
* “New codespace” tugmasini bosib yangi muhiti oching
* Kodlarni tahrirlab, o‘zgarishlarni push qiling

## Loyiha qanday texnologiyalar bilan qurilgan?

Loyiha quyidagi texnologiyalar yordamida qurilgan:

* Vite
* TypeScript
* React
* ShadCN UI
* Tailwind CSS

## Loyihani qanday deploy qilish mumkin?

Saytni deploy qilish uchun: [Cargo Flow](https://cargo-flow-nine.vercel.app/) platformasiga o‘ting va **“Share → Publish”** tugmasini bosing.

## Maxsus domen ulash mumkinmi?

Albatta!

Buning uchun: **Project > Settings > Domains** bo‘limiga o‘ting va **"Connect Domain"** tugmasini bosing.

Qo‘shimcha ma’lumot: [Maxsus domen ulash bo‘yicha qo‘llanma](https://docs.cargo-flow.uz/tips-tricks/custom-domain#step-by-step-guide)
