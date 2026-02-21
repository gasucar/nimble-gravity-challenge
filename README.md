# 🚀 Nimble Gravity Challenge

A technical challenge built with **React + TypeScript + Vite + TailwindCSS**, focused on clean architecture, proper error handling, and a solid user experience.

---

## 📌 Overview

This project allows a candidate to:

1. Authenticate using their email
2. Fetch available job positions
3. Submit a GitHub repository as part of a job application

The application emphasizes:

* Type safety (no `any`)
* Clean error handling
* Reusable utilities
* UX-friendly validation
* Scalable folder structure

---

## 🏗 Tech Stack

* ⚛ **React**
* 🟦 **TypeScript**
* ⚡ **Vite**
* 🎨 **TailwindCSS**
* 🔔 **React Toastify**
* 🌐 **Axios**

---

## 🧠 Architecture Decisions

### 1️⃣ Separation of Concerns

The project follows a feature-based structure:

```id="x8k2m1"
src/
 ├── features/
 │    ├── candidate/
 │    ├── jobs/
 │
 ├── shared/
 │    ├── components/
 │    ├── utils/
 │    ├── types/
```

This allows:

* Scalability
* Clear boundaries
* Easy testing
* Maintainability

---

### 2️⃣ Centralized Error Handling

We created a reusable helper:

```id="l0p9sn"
shared/utils/extractAxiosError.ts
```

This function:

* Safely narrows `unknown`
* Avoids `any`
* Handles:

  * Simple backend errors
  * Structured validation errors (`fieldErrors`)
* Returns a clean message for UI usage

This keeps components clean and avoids duplicated logic.

---

### 3️⃣ Type-Safe API Errors

Custom backend error interface:

```ts id="o3mn29"
export interface ApiErrorResponse {
  error?: string;
  details?: {
    formErrors?: string[];
    fieldErrors?: Record<string, string[]>;
  };
}
```

This ensures:

* No `any`
* Predictable error structures
* Safer Axios narrowing

---

### 4️⃣ UX-Focused Validation

Both email and GitHub repository fields:

* Validate on `onBlur`
* Show inline error messages
* Disable submit buttons when invalid
* Still validate on submit (defensive programming)

Example validations implemented:

* Email format validation
* GitHub repository URL validation:

  ```
  https://github.com/username/repository
  ```

---

### 5️⃣ Toast Feedback System

User feedback is handled via **React Toastify**:

* Success toast on valid submissions
* Error toast using real backend error messages
* Centralized error extraction for consistency

---

## ✨ Features

### 🔐 Email Authentication

* Real-time validation (onBlur)
* Disabled button when invalid
* Backend error handling
* Success feedback

---

### 💼 Jobs Listing

* Fetches job list from API
* Loading & error states handled
* Rendered dynamically

---

### 📦 Apply to Job

* GitHub repository validation
* Handles structured backend validation errors
* Success + error toast feedback
* Loading state with spinner

---

## 🔎 Error Handling Strategy

All async actions:

* Catch `unknown`
* Narrow using `axios.isAxiosError`
* Extract meaningful error message
* Show via toast

This ensures:

* Consistent UX
* Clean components
* Fully typed error flows

---

## 🧪 Defensive Programming

Even if frontend validation is bypassed:

* Backend validation errors are parsed
* First relevant field error is shown
* User always receives meaningful feedback

---

## 🚀 Getting Started

```bash id="b4k3v2"
npm install
npm run dev
```

---

## 🎯 Key Highlights

✔ No `any` usage
✔ Proper Axios error narrowing
✔ Reusable error extraction helper
✔ Clean folder structure
✔ UX-friendly validation
✔ Scalable architecture

---

## 🧩 Future Improvements

* Global Axios interceptors
* Unit tests for validation logic
* Custom `useAsyncAction` hook abstraction
* Form abstraction layer
* Accessibility improvements (ARIA attributes)

---

## 👨‍💻 Author

Gaston Rodrigo Gonzalez
Frontend Developer – React | TypeScript

---

---