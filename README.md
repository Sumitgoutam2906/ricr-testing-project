# 🚀 RICR Testing Project

A complete testing framework built using **Jest** and **Playwright** covering **Unit Testing, API Testing, UI Automation, and Page Object Model (POM)**.

---

## 📌 Project Overview

This project demonstrates end-to-end testing capabilities:

* ✅ Unit Testing (Jest)
* ✅ API Testing (Playwright)
* ✅ UI End-to-End Testing (Playwright)
* ✅ Page Object Model (POM)

---

## 🧠 Tech Stack

* **TypeScript** — Type safety and better maintainability
* **Jest** — Unit testing framework
* **Playwright** — API + UI automation
* **Node.js** — Runtime environment

---

## 📁 Project Structure

```
ricr-testing-project/
│
├── src/
│   ├── utils/
│   │   └── pagination.util.ts
│   ├── services/
│   │   └── caller.service.ts
│   ├── controllers/
│       └── interaction.controller.ts
│
├── e2e/
│   ├── auth.api.spec.ts       # API Tests (B1)
│   ├── ui.spec.ts             # UI Tests (B2)
│   ├── ui-pom.spec.ts         # POM Tests (B3)
│   └── pages/
│       └── LoginPage.ts       # Page Object Model
│
├── jest.config.js
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧪 Test Coverage

### 🔹 Section A — Unit Testing (Jest)

| Module             | Test Cases |
| ------------------ | ---------- |
| Pagination Utility | 6          |
| Caller Service     | 4          |
| Controller         | 6          |

---

### 🔹 Section B — Playwright Testing

#### B1 — API Testing

* Register
* Login (web & mobile)
* Invalid credentials
* GET /me (authorized & unauthorized)
* Logout

👉 **Total: 8 test cases**

---

#### B2 — UI Testing

* Page load
* Successful login
* Failed login
* Empty form
* Loading state

👉 **Total: 5 test cases**

---

#### B3 — Page Object Model (POM)

* Refactored all UI tests using POM

👉 **Total: 5 test cases**

---

## 📊 Total Test Cases

```
A1 = 6
A2 = 4
A3 = 6
B1 = 8
B2 = 5
B3 = 5
----------------
TOTAL = 🔥 34 TEST CASES
```

---

## ⚙️ Setup & Installation

```bash
npm install
```

---

## ▶️ Run Tests

### 🔹 Unit Tests

```bash
npm test
```

### 🔹 End-to-End Tests

```bash
npm run test:e2e
```

---

## 🧠 Key Concepts Implemented

* Unit Testing
* Mocking
* API Testing
* UI Automation
* Page Object Model (POM)
* Async/Await Handling
* Error Handling
* Flexible Assertions

---

## ⚠️ Challenges & Solutions

### ❌ Backend instability

✔ Solved using flexible assertions

### ❌ Non-JSON responses

✔ Handled using try-catch

### ❌ Auth dependency

✔ Skipped dependent tests when needed

---

## 💡 Why Playwright?

* Supports both **API + UI testing**
* Fast execution
* Auto-waiting mechanism
* Reliable and scalable

---

## 🏁 Conclusion

This project demonstrates a complete testing approach covering:

* Logic validation (Unit Testing)
* API validation (Integration Testing)
* User flow validation (UI Testing)
* Scalable architecture (POM)

---

## 👨‍💻 Author

** Sumit Goutam **

---
