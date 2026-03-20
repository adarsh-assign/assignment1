# AI-Powered Multi-Domain Dashboard

## 🚀 Overview

This project is a modern, extensible dashboard application that serves as a unified hub for multiple domains such as finance, health, news, weather, and AI chat.

It is designed with scalability and modularity in mind, allowing new widgets and AI-powered features to be easily added.

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **State Management:** React Hooks (useState, useEffect)
* **Drag & Drop Layout:** react-grid-layout
* **Charts:** recharts
* **API Calls:** axios
* **Persistence:** LocalStorage

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dashboard-app.git
cd dashboard-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 🧱 Architecture & Design Decisions

### 1. Component-Based Architecture

The application follows a modular structure:

* `Dashboard.jsx` → Layout manager
* `widgets/` → Independent domain widgets (Finance, Health, etc.)

Each widget is self-contained, making it easy to:

* Add new widgets
* Modify existing ones without affecting others

---

### 2. Drag-and-Drop Layout

* Implemented using `react-grid-layout`
* Provides:

  * Resizable widgets
  * Reordering via drag-and-drop
* Layout is stored in **LocalStorage** to persist user customization

---

### 3. State Management

* Local component state is used for simplicity
* Each widget manages its own data independently
* Avoided global state (like Redux) to keep the app lightweight

---

### 4. Data Handling Strategy

* **Mock data** used for health and finance (simulated updates)
* **API integration** used for news
* Weather is currently static but structured for API integration

---

### 5. AI Integration

* AI chat widget simulates responses
* Designed to be easily integrated with real APIs (e.g., OpenAI)
* AI insights can be generated per widget using shared service layer

---

### 6. Live Data Simulation

* Implemented using `setInterval`
* Simulates
