
# 🌍 Multi-Language Recipe Blog (Next.js)

A modern, SEO-optimized, multi-language recipe blog built using **Next.js** with Static Site Generation (SSG), Internationalization (i18n), and dynamic routing.

This project demonstrates performance optimization, localization strategies, and SEO best practices for content-heavy websites.

---

## 🚀 Features

* 🌐 Internationalization (English, Spanish, French)
* ⚡ Static Site Generation (SSG)
* 🔄 Dynamic Routes (`/recipes/[slug]`)
* 🔍 SEO Optimization (Meta tags + Open Graph)
* 🗺️ Sitemap Generation (`sitemap.xml`)
* 🐦 Social Sharing (Twitter Web Intent)
* 🖼️ Optimized Images
* 🐳 Docker-ready setup
* 📦 Clean and scalable project structure

---

## 🛠️ Tech Stack

### Skills Used

* React
* Next.js
* Static Site Generation (SSG)
* Internationalization (i18n)
* SEO Optimization
* Dynamic Routing
* TypeScript
* Git Version Control

### Tools Used

* Next.js
* React
* Node.js
* npm
* Git & GitHub
* GitHub Codespaces
* VS Code

---

## 📁 Project Structure

```
recipe-blog/
│
├── public/
│   ├── sitemap.xml
│   └── images/
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

* 🇺🇸 English (default)
* 🇪🇸 Spanish
* 🇫🇷 French

### Example Routes:

```
/en/recipes/classic-spanish-paella  
/es/recipes/classic-spanish-paella  
/fr/recipes/classic-spanish-paella  
```

Language switching is handled using the Next.js router with built-in locale support.

---

## ⚡ Data Fetching Strategy

* Used `getStaticProps` and `getStaticPaths`
* Pages are statically generated at build time
* Improves performance and SEO
* Ideal for content-driven websites like blogs

---

## 🔎 SEO Strategy

* Dynamic `<Head>` meta tags per recipe
* Open Graph tags for better social sharing previews
* Automatically generated `sitemap.xml`
* Clean URL structure
* Optimized rendering using SSG

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
http://localhost:3000/sitemap.xml
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
http://localhost:3000
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

Application runs at:

```
http://localhost:3000
```

---

## 📈 Performance Optimizations

* Static Site Generation (SSG)
* Reduced unnecessary dependencies
* Optimized image loading
* Lightweight component structure
* Efficient routing

---

## 🎯 Learning Outcomes

* Implemented multi-language routing
* Understood SSG vs SSR tradeoffs
* Applied real-world SEO strategies
* Generated sitemap for indexing
* Built scalable dynamic routes
* Improved performance optimization techniques

---

## 👩‍💻 Author

**B.N.S. Harshitha**

---

