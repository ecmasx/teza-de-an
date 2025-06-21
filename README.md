# 🪑 Stula

Proiect de diplomă — magazin online de scaune cu vizualizare în realitate augmentată (AR).

Tehnologii folosite:

- [Next.js](https://nextjs.org) — framework React pentru web apps
- [Tailwind CSS](https://tailwindcss.com) — utilitar CSS pentru design rapid și responsiv
- [model-viewer](https://modelviewer.dev) — vizualizator 3D și AR
- [TypeScript](https://www.typescriptlang.org) — tipare stricte și claritate în cod
- [OpenAI GPT-4.1-mini](https://openai.com) — chatbot inteligent pentru recomandări produse
- [Vercel](https://vercel.com) — hosting și deploy
- [Swiper](https://swiperjs.com) — slider pentru galerie de imagini

## 📁 Structură fișiere

```bash
ar-furniture-store/
├── components/          # Componente UI (carduri produse, viewer AR)
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

3. Configurează variabila de mediu pentru chatbot:

```bash
cp .env.example .env.local
# Editează .env.local și adaugă cheia ta OpenAI API
```

Pentru a obține o cheie OpenAI API: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

4. Rulează aplicația în modul dezvoltare:

```bash
npm run dev
```

Accesează [http://localhost:3000](http://localhost:3000)

## 📱 AR — Realitate Augmentată

Se folosește `<model-viewer>` pentru a încărca modele `.glb` și `.usdz`. Pe telefoane compatibile, utilizatorul poate vedea produsul în spațiul real prin camera telefonului.

- Android: Scene Viewer
- iOS: Quick Look

## 🤖 Chatbot Inteligent

Aplicația include un chatbot alimentat de GPT-4o-mini care:

- Recomandă produse bazate pe nevoile clientului (cameră, buget, stil)
- Oferă link-uri directe către produsele sugerate
- Explică funcția AR și cum să o folosești
- Răspunde în română și înțelege contextul magazinului STULA
- Apare ca un buton flotant în colțul din dreapta jos

Chatbot-ul cunoaște toate produsele din catalog și poate face recomandări personalizate.

## 🧠 Viitoare îmbunătățiri

- Integrare Shopify Headless
- Selectare interactivă de culori și materiale

## 👨‍🎓 Autor

Realizat de [Maxim Madan](https://github.com/ecmasx)  
Proiect pentru **teza de an**  
Tehnologii web moderne – 2025
