<div align="center">
  <img src="./public/logo.svg" alt="Vibecode Editor Logo" width="120" />
  <h1>🧠 Vibecode Editor – AI-Powered Web IDE</h1>
  <p>A blazing-fast, AI-integrated web IDE built entirely in the browser.</p>
</div>

---

**Vibecode Editor** is a next-generation coding environment built using the Next.js App Router, WebContainers, Monaco Editor, and the Google Gemini API. It offers real-time code execution, an AI-powered chat assistant, and support for multiple modern tech stacks — all wrapped in a stunning developer-first UI. No local setup required; just open your browser and start coding!

---

## 🚀 Features

- 🔐 **OAuth Login with NextAuth** – Supports Google & GitHub login.
- 🎨 **Modern UI** – Built with TailwindCSS & ShadCN UI.
- 🌗 **Dark/Light Mode** – Seamlessly toggle between themes.
- 🧱 **Project Templates** – Choose from React, Next.js, Express, Hono, Vue, or Angular.
- 🗂️ **Custom File Explorer** – Create, rename, delete, and manage files/folders easily.
- 🖊️ **Enhanced Monaco Editor** – Syntax highlighting, formatting, keybindings, and AI autocomplete.
- 💡 **AI Suggestions with Gemini** – Cloud models give you code completion on `Ctrl + Space` or double `Enter`. Accept with `Tab`.
- ⚙️ **WebContainers Integration** – Instantly run frontend/backend apps right in the browser.
- 💻 **Terminal with xterm.js** – Fully interactive embedded terminal experience. 
- 🤖 **AI Chat Assistant** – Share files with the AI and get help, refactors, or explanations.

---

## 📸 Showcase

### 1. The Coding Interface
Experience a desktop-grade IDE right in your browser. With an integrated file explorer, Monaco editor, and a live WebContainer terminal, you can write and execute code instantly without any local setup.
<div align="center">
  <img src="./assets/image copy.png" alt="Code Editor and Terminal" width="100%" />
</div>

### 2. Context-Aware AI Assistant
Stuck on a bug or need a code review? The Gemini-powered AI chat sidebar understands your entire codebase, offering real-time debugging, refactoring, and inline code suggestions.
<div align="center">
  <img src="./assets/Ai_Assistant.png" alt="AI Chat Interface" width="100%" />
</div>

### 3. Project Dashboard
Organize your development environment with ease. Your personalized dashboard lets you view recent workspaces, star your favorite projects, and pick up right where you left off.
<div align="center">
  <img src="./assets/Dashborad.png" alt="Project Dashboard" width="100%" />
</div>

### 4. Rapid Project Templates
Say goodbye to tedious configuration. Instantly spin up fully-configured boilerplate projects across various modern tech stacks, including React, Next.js, Express, Vue, and Angular.
<div align="center">
  <img src="./assets/Landing Page_after_the_login.png" alt="Template Selection" width="100%" />
</div>

### 5. Beautiful Landing Page
A clean, highly responsive entry point built with TailwindCSS and ShadCN UI. Designed with developers in mind, featuring seamless light and dark mode support.
<div align="center">
  <img src="./assets/Landing_page_form.png" alt="Vibecode Landing Page" width="100%" />
</div>

---

## 🧱 Tech Stack
| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | TailwindCSS, ShadCN UI, Lucide Icons |
| **Language** | TypeScript |
| **Auth** | NextAuth v5 (Google + GitHub OAuth) |
| **Editor** | Monaco Editor |
| **AI Intelligence** | Google Gemini API (gemini-2.5-flash) |
| **Runtime** | WebContainers API |
| **Terminal** | xterm.js |
| **Database** | PostgreSQL (via Prisma ORM) |
| **Validation** | Zod |

---

## 🛠️ Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/abhaysinghh1/Vibe-Code-Editor.git
cd Vibe-Code-Editor
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following keys:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/vibecode?schema=public"

# NextAuth Configuration
AUTH_SECRET=your_auth_secret_key

# OAuth Providers
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret

# AI Integration
GEMINI_API_KEY=your_google_gemini_api_key
```

> **Tip:** You can get a free PostgreSQL database from [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app).

### 4. Setup the Database
Run the Prisma migration to create all tables in your PostgreSQL database:
```bash
npm run db:migrate
```

### 5. Generate Prisma Client
```bash
npm run db:generate
```

### 6. Run the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser to start coding!

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:push` | Push schema changes without migrations |
| `npm run db:seed` | Seed the database |
| `npm run db:studio` | Open Prisma Studio (DB GUI) |
| `npm run db:generate` | Regenerate Prisma Client |

---

## 🎯 Keyboard Shortcuts
- **`Ctrl + Space`** or **`Double Enter`**: Trigger AI code suggestions
- **`Tab`**: Accept AI code suggestion
- **`Ctrl + S`**: Save current file

## 📄 License
This project is licensed under the MIT License.

