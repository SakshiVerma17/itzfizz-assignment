# 🚗 Scroll-Driven Hero Section Animation

## 📌 Project Overview

This project is a **scroll-based animated hero section** built using **React + Vite + GSAP**.
It recreates a smooth, premium animation where a car moves across the screen and reveals text and stats based on scroll position.

---

## 🎯 Features

* ✨ Smooth scroll-driven animation (not time-based)
* 🚗 Car movement synced with scroll progress
* 🔤 Letter-by-letter text reveal based on car position
* 📊 Animated stats cards (fade + smooth appearance)
* 🔁 Works both on forward and reverse scroll
* ⚡ High performance using `transform` and optimized animations
* 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

* React.js (Vite)
* GSAP (GreenSock Animation Platform)
* Tailwind CSS / Custom CSS

---

## 🧠 How It Works

* Scroll position is converted into a **progress value (0 → 1)**
* Car moves horizontally based on scroll progress
* Each letter is revealed when the car crosses it
* Cards (stats boxes) appear smoothly based on scroll position
* Reverse scrolling hides elements smoothly

---

## 📂 Project Structure

```
itzfizz-project/
│── public/
│── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── index.html
│── package.json
│── vite.config.js
```

---

## ▶️ Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/itzfizz-assignment.git
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally

```
npm run dev
```

---

## 🙌 Author

**Sakshi Verma**

---

## 📌 Notes

* Animations are optimized for smooth performance
* Uses `transform` instead of layout-affecting properties
* Designed to mimic premium UI motion behavior

---
