# 🛍️ Product Listing Application

This project is a frontend assignment built using **React**, featuring:

- Product listing with search, filters, sorting, infinite scrolling
- Product detail view
- Responsive design with dark mode
- Deployed using Vercel with CI/CD via GitHub Actions

---

## 🚀 Features & Methods Used

### 🔍 Search Functionality
- Implemented **debounced search** to optimize API calls when searching by product name.
- Users can also search products using **barcode scanning** via input.

### 🧪 Filtering & Sorting
Users can filter products by:
- **Category** (multi-select supported)
- **Nutrition values**, such as sugar content using range-based filtering

Sorting options include:
- Product Name (A-Z, Z-A)
- Nutrition Grade (Asc/Desc)
- Calories (High to Low & Low to High)

Used JavaScript methods like:
- `filter()` for category and nutritional filtering
- `sort()` for sorting functionality
- `includes()` for keyword matching
- `some()` for validating ingredient availability

### 📦 Infinite Scrolling
- Pagination is implemented using **infinite scroll**, loading more products as the user scrolls down the page.

### 📄 Product Detail Page
When a user clicks on a product card, they are navigated to a dedicated **Product Detail Page** displaying:
- Full image
- Complete list of ingredients
- Nutritional values
- Tags and labels (e.g., Vegan, Gluten-Free)

### ⚙️ State Management & API Handling
- Utilized **React Query** for efficient API handling, including:
  - API caching
  - Lazy loading
  - Automated refetching and error handling

### 💅 UI/UX & Responsiveness
- Fully responsive and **mobile-friendly design** using **Tailwind CSS**
- Includes **dark mode support**
- **Skeleton loaders** provide a smooth user experience during data fetch

### 🚀 Deployment & CI/CD
- Project is deployed using **Vercel**
- **CI/CD setup** with **GitHub Actions** automates:
  - Code testing
  - Dependency installation
  - Production build

---

## ⏱️ Time Taken

- Total Time: **1 Day**

---

## 🔗 Live URL & Repo

- 🌐 **Live Demo:** [https://project-assignment-chi.vercel.app/](https://project-assignment-chi.vercel.app/)
- 📂 **GitHub Repo:** [https://github.com/vishal895/project_assignment](https://github.com/vishal895/project_assignment)

---

