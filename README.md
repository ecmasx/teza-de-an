# 🪑 AR Furniture Store

Proiect de diplomă — magazin online de mobilier (scaune sau mese) cu vizualizare în realitate augmentată (AR) și cod QR pentru acces mobil.

## 📌 Descriere

Această aplicație permite utilizatorilor:

- să exploreze modele de scaune sau mese
- să selecteze culoarea preferată
- să vizualizeze produsul în **realitate augmentată** (AR) direct de pe telefon
- să scaneze un **cod QR** de pe desktop pentru a deschide modelul în AR pe telefon

Tehnologii folosite:

- [Next.js](https://nextjs.org) — framework React pentru web apps
- [Tailwind CSS](https://tailwindcss.com) — utilitar CSS pentru design rapid și responsiv
- [model-viewer](https://modelviewer.dev) — vizualizator 3D și AR
- [QRCode.react](https://www.npmjs.com/package/qrcode.react) — generare coduri QR
- TypeScript — tipare stricte și claritate în cod

## 📁 Structură fișiere

```bash
ar-furniture-store/
├── components/          # Componente UI (carduri produse, QR, viewer AR)
├── lib/data.ts          # Listă mock de produse
├── pages/
│   ├── index.tsx        # Pagina principală (catalog produse)
│   ├── product/[id].tsx # Pagina individuală a produsului
│   └── ar/[id].tsx      # Vizualizare AR pentru produs (mobil)
├── public/models/       # Modele 3D (.glb) și imagini produse
├── tailwind.config.ts   # Configurație custom Tailwind cu breakpoint-uri
└── ...
```

## 🧰 Instalare & rulare

1. Clonează proiectul:

```bash
git clone https://github.com/ecmasx/ar-furniture-store.git
cd ar-furniture-store
```

2. Instalează dependințele:

```bash
npm install
```

3. Rulează aplicația în modul dezvoltare:

```bash
npm run dev
```

Accesează [http://localhost:3000](http://localhost:3000)

## 🎯 Funcționalități

- ✅ Catalog produse cu imagini
- ✅ Pagină detaliu produs
- ✅ Selectare culoare (în viitor)
- ✅ Generare cod QR pentru AR (desktop)
- ✅ Vizualizare produs în AR (mobil)

## 📱 AR — Realitate Augmentată

Se folosește `<model-viewer>` pentru a încărca modele `.glb`. Pe telefoane compatibile, utilizatorul poate vedea produsul în spațiul real prin camera telefonului.

- Android: Scene Viewer
- iOS: Quick Look

## 🧠 Viitoare îmbunătățiri

- Integrare CMS (ex: Shopify Headless sau Sanity)
- Căutare și filtrare produse
- Selectare interactivă de culori și materiale
- Adăugare coș de cumpărături și checkout

## 👨‍🎓 Autor

Realizat de [Maxim Madan](https://github.com/ecmasx)  
Proiect pentru **teza de an**  
Tehnologii web moderne – 2025
