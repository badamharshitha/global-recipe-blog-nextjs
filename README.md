# 🌍 Multi-Language Recipe Blog (Next.js)

A modern, SEO-optimized, multi-language recipe blog built using **Next.js** with Static Site Generation (SSG), Internationalization (i18n), and dynamic routing.

This project demonstrates performance optimization, localization, and search engine best practices for content-heavy websites.

---

## 🚀 Features

- 🌐 Internationalization (English, Spanish, French)
- ⚡ Static Site Generation (SSG)
- 🔄 Dynamic Routes (`/recipes/[slug]`)
- 🔍 SEO Optimization (Meta tags + Open Graph)
- 🗺️ Sitemap Generation (`sitemap.xml`)
- 🐦 Social Sharing (Twitter Web Intent)
- 🖼️ Optimized Images
- 🐳 Docker-ready setup
- 📦 Clean project structure

---

## 🛠️ Tech Stack

### Skills Used
- React
- Next.js
- Static Site Generation (SSG)
- Internationalization (i18n)
- SEO Optimization
- Dynamic Routing
- TypeScript
- Git

### Tools Used
- Next.js
- React
- Node.js
- npm
- Git & GitHub
- GitHub Codespaces
- VS Code

---

## 📁 Project Structure

```

recipe-blog/
│
├── public/
│   ├── sitemap.xml
│   └── images
│
├── scripts/
│   └── generate-sitemap.js
│
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   │   ├── index.tsx
│   │   └── recipes/[slug].tsx
│   └── styles/
│
├── .gitignore
├── next.config.js
├── package.json
└── README.md

```

---

## 🌐 Internationalization (i18n)

The project supports:

- 🇺🇸 English (default)
- 🇪🇸 Spanish
- 🇫🇷 French

Locale-based routing:

```

/en/recipes/classic-spanish-paella
/es/recipes/classic-spanish-paella
/fr/recipes/classic-spanish-paella

```

Language switching is handled using Next.js router with locale support.

---

## ⚡ Data Fetching Strategy

- Used `getStaticProps` and `getStaticPaths`
- Pages are statically generated at build time
- Improves performance and SEO
- Suitable for content-heavy sites like blogs

---

## 🔎 SEO Strategy

- Dynamic `<Head>` meta tags per recipe
- Open Graph tags for social sharing
- Automatically generated `sitemap.xml`
- Clean URL structure
- Optimized page rendering with SSG

---

## 🗺️ Sitemap Generation

Sitemap is generated using:

```

npm run generate-sitemap

```

It creates:

```

/public/sitemap.xml

```

Accessible at:

```

[http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)

```

---

## 🐳 Running Locally

### 1️⃣ Install dependencies

```

npm install

```

### 2️⃣ Run development server

```

npm run dev

```

Open:

```

[http://localhost:3000](http://localhost:3000)

```

---

## 🏗️ Production Build

```

npm run build
npm start

```

---

## 📦 Docker (If Included)

Run:

```

docker-compose up --build

```

Application runs on:

```

[http://localhost:3000](http://localhost:3000)

```

---

## 📈 Performance Optimizations

- Static Site Generation (SSG)
- Reduced unnecessary dependencies
- Optimized images
- Lightweight components
- Efficient routing

---

## 🎯 Learning Outcomes

- Implemented multi-language routing
- Understood SSG vs SSR tradeoffs
- Applied real-world SEO strategies
- Generated sitemap for indexing
- Built scalable dynamic routes
- Improved performance optimization techniques

---

## 👨‍💻 Author
B.N.S. Harshitha

---

## ✅ Status

✔ i18n implemented  
✔ Dynamic routes working  
✔ SEO meta tags added  
✔ Sitemap generated  
✔ Production build successful  

**Project Status: Completed 🎉**
```

