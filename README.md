# Car Comparison Dashboard

A modern, responsive React application that allows users to compare different car models based on brand, type, price, rating, and other specifications. Built with TypeScript, Tailwind CSS, and React Context API.

## Live Demo

## [text](https://car-comparison-dashboard.onrender.com)

_Dashboard UI with filters and comparison table_

---

## Features

- Compare multiple car models side-by-side
- Filter cars by:
  - Brand
  - Type (SUV, Sedan)
  - Price Range
  - Rating
- Sort results by price or rating
- Responsive UI built with Tailwind CSS
- SEO-friendly setup
- Lazy loading images for better performance
- Have accessibility in app

---

## Tech Stack

- React + TypeScript
- Tailwind CSS
- React Context API for state management

---

## Project Structure

src/
│
├── assets/ # Car images
├── components/ # UI components
│ ├── filters/ # FilterBar & filter logic
│ ├── CarList.tsx
│ ├── ComparisonTable.tsx
│
│
├── context/ # CarContext for selected cars
├── data/ # Car data file
├── types.ts # TypeScript interfaces
├── App.tsx # Main app component
└── main.tsx # Entry point

### 1. Clone the repository

```bash
git clone https://github.com/your-username/car-comparison-dashboard.git
cd car-comparison-dashboard
run npm install
npm run dev
http://localhost:5173
```
