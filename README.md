# 🧠 Smart Task Collaboration Platform – Frontend

This is the frontend client for the **Smart Task Collaboration Platform** – a modern web-based tool that enables users to create and manage workspaces, boards, and tasks collaboratively, with support for real-time interactions, notifications, and AI task suggestions.

This project follows the **SOFEA architecture**, where the frontend is fully decoupled from the backend API.

---

## 🚀 Features (MVP)

- ✅ User authentication (JWT-based)
- ✅ Workspace and board views
- ✅ Task creation, editing, and filtering
- ✅ Real-time UI updates (planned)
- ✅ In-app notifications
- ✅ Responsive design

---

## 🛠️ Tech Stack

- **Framework**: Angular / React / Vue (Choose accordingly)
- **State Management**: NgRx / Redux / Pinia
- **HTTP Client**: Axios / Angular HttpClient
- **Styling**: TailwindCSS / Bootstrap / SCSS
- **WebSockets**: Socket.IO / SignalR (planned)
- **Notifications**: Toastr / SweetAlert2 / Custom
- **AI Integration**: OpenAI / Hugging Face (optional)
- **Build Tools**: Vite / Webpack / Angular CLI

---

## 📁 Project Structure (Sample)

```
/src
  /app
    /auth
    /core
    /shared
    /features
      /workspace
      /board
      /task
  /assets
  /environments
angular.json / vite.config.js
```

---

## 🧪 Getting Started (Development)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/smart-task-client.git
cd smart-task-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment

Create an `.env` or use `environment.ts`:

```ts
export const environment = {
  apiUrl: "http://localhost:5000/api",
  socketUrl: "http://localhost:5000",
  openAiKey: "your-openai-key",
};
```

### 4. Run the development server

```bash
npm start
# or
ng serve
```

---

## 🔐 Authentication

- Login and registration
- JWT stored securely (e.g., HttpOnly cookie or localStorage)
- Token refresh support

---

## 🌐 Communication

- RESTful API consumption
- WebSocket integration (planned)
- External API usage (AI integrations)

---

## 🧑‍💻 Development Scripts

| Action         | Command          |
| -------------- | ---------------- |
| Run Dev Server | `npm start`      |
| Build App      | `npm run build`  |
| Lint           | `npm run lint`   |
| Format         | `npm run format` |
| Test           | `npm run test`   |

---

## 🧩 Future Enhancements

- 🔁 Real-time task and board updates
- 🧠 AI task assistant
- 🧭 Offline-first support
- 📈 Activity dashboard

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feat/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🧠 About This Project

This frontend client was created to practice and demonstrate:

- Clean modular UI architecture
- API-first web development
- Integration with real-time services and AI APIs
- SOFEA architectural principles

## Project Structure

🗂️ Folder Structure (Standalone-First)

```vbnet
src/
└── app/
    ├── core/            ← global singleton services, guards, interceptors
    │   ├── services/
    │   ├── guards/
    │   ├── interceptors/
    │   └── config.ts
    ├── shared/          ← reusable standalone components, directives, pipes
    │   ├── components/
    │   ├── directives/
    │   └── pipes/
    ├── features/        ← feature areas with routed standalone components
    │   ├── auth/
    │   │   ├── pages/
    │   │   │   ├── login/
    │   │   │   ├── register/
    │   │   │   └── pages-routing.ts
    │   │   ├── auth.service.ts
    │   │   └── auth.guard.ts
    │   └── dashboard/
    │       ├── dashboard.component.ts (standalone)
    │       └── dashboard-routing.ts
    ├── app.routes.ts
    └── main.ts
```

- This aligns with standalone-focused architecture guidance.

✅ Key Guidelines & Best Practices

- Standalone Components as Default In Angular 19, standalone: true is implied and no longer required to specify manually.
- Simplifies component creation: ng g component my-comp --standalone.

Migration: Use the SCAM pattern (Single Component Angular Module) to transition gradually
