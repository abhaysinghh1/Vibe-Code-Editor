import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Terminal,
  Zap,
  Layers,
  Globe,
  Shield,
  Braces,
  MonitorSmartphone,
  Bot,
  FileCode2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ── Feature Data ────────────────────────────────────────────────────

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Monaco Editor",
    description:
      "The same powerful editor behind VS Code — with syntax highlighting, IntelliSense, and keyboard shortcuts.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Chat Assistant",
    description:
      "Gemini-powered AI that understands your code. Get debugging help, refactors, and explanations in real time.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Code Completion",
    description:
      "Smart suggestions powered by Gemini 2.5 Flash. Press Ctrl+Space or double Enter to trigger, Tab to accept.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Built-in Terminal",
    description:
      "Full xterm.js terminal embedded right in your browser. Run commands, install packages, and debug — no local setup.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "WebContainers",
    description:
      "Run Node.js entirely in the browser with WebContainers. Instant project setup with zero downloads.",
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Framework",
    description:
      "Start with React, Next.js, Vue, Angular, Express, or Hono templates. Preconfigured and ready to code.",
    gradient: "from-indigo-500 to-violet-400",
  },
];

// ── Tech Stack Data ─────────────────────────────────────────────────

const techStack = [
  { name: "Next.js 15", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Prisma", category: "ORM" },
  { name: "PostgreSQL", category: "Database" },
  { name: "NextAuth v5", category: "Auth" },
  { name: "Monaco Editor", category: "Editor" },
  { name: "Gemini AI", category: "Intelligence" },
  { name: "WebContainers", category: "Runtime" },
  { name: "xterm.js", category: "Terminal" },
  { name: "Zod", category: "Validation" },
  { name: "Zustand", category: "State" },
];

// ── Template Showcase Data ──────────────────────────────────────────

const templates = [
  { name: "React", icon: <Zap className="w-5 h-5" />, color: "text-cyan-400" },
  { name: "Next.js", icon: <Globe className="w-5 h-5" />, color: "text-white" },
  { name: "Vue", icon: <Braces className="w-5 h-5" />, color: "text-emerald-400" },
  { name: "Angular", icon: <Shield className="w-5 h-5" />, color: "text-red-400" },
  { name: "Express", icon: <Terminal className="w-5 h-5" />, color: "text-yellow-400" },
  { name: "Hono", icon: <FileCode2 className="w-5 h-5" />, color: "text-orange-400" },
];

// ── Page Component ──────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen">
      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center pt-16 pb-20 px-4 text-center max-w-5xl mx-auto">
        {/* Announcement Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200 dark:border-rose-800/50 bg-rose-50 dark:bg-rose-950/30 px-4 py-1.5 text-sm text-rose-600 dark:text-rose-400 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Powered by Google Gemini 2.5 Flash</span>
        </div>

        <div className="flex flex-col justify-center items-center my-2">
          <Image
            src={"/hero.svg"}
            alt="VibeCode Editor Hero"
            height={400}
            width={400}
            className="drop-shadow-2xl"
            priority
          />

          <h1 className="z-20 text-5xl sm:text-6xl lg:text-7xl mt-8 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 tracking-tight leading-[1.2]">
            Vibe Code With Intelligence
          </h1>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-center text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          A blazing-fast, AI-integrated web IDE with real-time code execution, an
          AI chat assistant, and support for multiple modern frameworks. No local
          setup required — just open your browser and start coding.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link href={"/dashboard"}>
            <Button variant={"brand"} size={"lg"} className="text-base px-8 py-6 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-shadow">
              Start Coding Free
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href={"https://github.com/abhaysinghh1/Vibe-Code-Editor"} target="_blank">
            <Button variant={"outline"} size={"lg"} className="text-base px-8 py-6">
              <MonitorSmartphone className="w-4 h-4 mr-1" />
              View on GitHub
            </Button>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
          {[
            { value: "6+", label: "Framework Templates" },
            { value: "AI", label: "Code Completion" },
            { value: "0", label: "Setup Required" },
            { value: "∞", label: "Possibilities" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Grid Section ──────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">
              Build Fast
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A desktop-grade IDE experience running entirely in your browser, supercharged with AI intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Code Preview Section ───────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            A Real IDE.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              In Your Browser.
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Write, run, and debug code with a full file explorer, Monaco editor, embedded terminal, and live preview — all without leaving the browser.
          </p>
        </div>

        {/* Mock Editor Window */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xl shadow-black/10 dark:shadow-black/30">
          {/* Window Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                VibeCode Editor — App.tsx
              </span>
            </div>
          </div>

          {/* Editor Content */}
          <div className="bg-[#0D1117] p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="flex gap-4">
              {/* Line Numbers */}
              <div className="text-gray-600 dark:text-gray-600 select-none text-right">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              {/* Code */}
              <div className="text-gray-300">
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-cyan-300">React</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-orange-300">{`'react'`}</span>;
                </div>
                <div>
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-gray-300">{"{ "}</span>
                  <span className="text-cyan-300">useState</span>
                  <span className="text-gray-300">{" }"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-orange-300">{`'react'`}</span>;
                </div>
                <div className="h-5" />
                <div>
                  <span className="text-purple-400">export default</span>{" "}
                  <span className="text-blue-400">function</span>{" "}
                  <span className="text-yellow-300">App</span>
                  <span className="text-gray-300">() {"{"}</span>
                </div>
                <div>
                  {"  "}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-gray-300">[</span>
                  <span className="text-cyan-300">count</span>
                  <span className="text-gray-300">, </span>
                  <span className="text-cyan-300">setCount</span>
                  <span className="text-gray-300">]</span>{" "}
                  <span className="text-gray-300">=</span>{" "}
                  <span className="text-yellow-300">useState</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-green-400">0</span>
                  <span className="text-gray-300">);</span>
                </div>
                <div className="h-5" />
                <div>
                  {"  "}
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-gray-300">(</span>
                </div>
                <div>
                  {"    "}
                  <span className="text-gray-500">{"<"}</span>
                  <span className="text-blue-400">div</span>{" "}
                  <span className="text-cyan-300">className</span>
                  <span className="text-gray-300">=</span>
                  <span className="text-orange-300">{`"app"`}</span>
                  <span className="text-gray-500">{">"}</span>
                </div>
                <div>
                  {"      "}
                  <span className="text-gray-500">{"<"}</span>
                  <span className="text-blue-400">h1</span>
                  <span className="text-gray-500">{">"}</span>
                  <span className="text-gray-300">Count: {"{"}</span>
                  <span className="text-cyan-300">count</span>
                  <span className="text-gray-300">{"}"}</span>
                  <span className="text-gray-500">{"</"}</span>
                  <span className="text-blue-400">h1</span>
                  <span className="text-gray-500">{">"}</span>
                </div>
                <div>
                  {"      "}
                  <span className="text-gray-500">{"<"}</span>
                  <span className="text-blue-400">button</span>{" "}
                  <span className="text-cyan-300">onClick</span>
                  <span className="text-gray-300">=</span>
                  <span className="text-gray-300">{"{() => "}</span>
                  <span className="text-yellow-300">setCount</span>
                  <span className="text-gray-300">{"(c => c + 1)"}{"}"}</span>
                  <span className="text-gray-500">{">"}</span>
                  <span className="text-gray-300">Increment</span>
                  <span className="text-gray-500">{"</"}</span>
                  <span className="text-blue-400">button</span>
                  <span className="text-gray-500">{">"}</span>
                </div>
                <div>
                  {"    "}
                  <span className="text-gray-500">{"</"}</span>
                  <span className="text-blue-400">div</span>
                  <span className="text-gray-500">{">"}</span>
                </div>
                <div>
                  {"  "}
                  <span className="text-gray-300">);</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Templates Section ──────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Start With a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
              Template
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Choose from preconfigured project templates. Fully set up with all dependencies — just start coding.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {templates.map((template, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 dark:hover:border-zinc-700 hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              <div
                className={`${template.color} transition-transform duration-300 group-hover:scale-125`}
              >
                {template.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {template.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Stack Section ─────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Built With Modern{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
              Technology
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A carefully curated stack chosen for performance, developer experience, and reliability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="group relative inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-4 py-2 transition-all duration-300 hover:border-gray-300 dark:hover:border-zinc-600 hover:shadow-md"
            >
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA Section ──────────────────────────────────────── */}
      <section className="w-full max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="rounded-3xl border border-gray-200 dark:border-zinc-800 bg-gradient-to-br from-white via-rose-50/50 to-white dark:from-zinc-900 dark:via-rose-950/20 dark:to-zinc-900 p-12 sm:p-16 shadow-xl shadow-black/5 dark:shadow-black/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Coding?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Jump straight into a fully-configured editor with AI superpowers. No installation, no configuration — just code.
          </p>
          <Link href={"/dashboard"}>
            <Button variant={"brand"} size={"lg"} className="text-base px-10 py-6 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-shadow">
              Launch VibeCode Editor
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
