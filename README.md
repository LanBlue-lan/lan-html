# 🚀 Forum 部署教學 (Vercel + Render + Railway)

這份教學會幫你 **10 分鐘完成論壇部署**，得到一個 **永久線上網址**。

---

## ✅ 1️⃣ 前端 (React) → Vercel

1. 註冊 **Vercel** 👉 https://vercel.com (可以用 GitHub / Google)
2. 把 **frontend** 資料夾上傳到 GitHub (或直接拖到 Vercel)
3. 在 Vercel 新建專案，選擇 frontend 資料夾
4. 自動生成網址，例如：
   ```
   https://myforum.vercel.app
   ```

---

## ✅ 2️⃣ 後端 (Node.js API) → Render

1. 註冊 **Render** 👉 https://render.com
2. 在 Render 建立 **Web Service**
3. 選擇 backend 資料夾 (Node.js)
4. 設定：
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Render 會生成 API 網址，例如：
   ```
   https://myforum-api.onrender.com
   ```

---

## ✅ 3️⃣ MySQL → Railway (或 PlanetScale)

1. 註冊 **Railway** 👉 https://railway.app
2. 建立 MySQL Database
3. Railway 會給你一個連線字串，例如：
   ```
   mysql://user:password@host:port/dbname
   ```
4. 匯入 `database.sql`（在 Railway 介面上有 Import 功能）

---

## ✅ 4️⃣ 串接 API 與前端

- 打開 **frontend/src/config.js**
- 把 API URL 改成 Render 給的網址，例如：
  ```js
  export const API_URL = "https://myforum-api.onrender.com";
  ```
- 重新部署 Vercel，網站就能連到你的 API！

---
