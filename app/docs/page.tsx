"use client";

import { Header } from "@/modules/home/header";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    title: "React",
    description:
      "A JavaScript library for building user interfaces with component-based architecture.",
    url: "https://react.dev",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
    icon: (
      <svg viewBox="-11.5 -10.232 23 20.463" className="w-8 h-8" fill="#61dafb">
        <circle r="2.05" />
        <g stroke="#61dafb" fill="none" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    title: "MDN Web Docs",
    description:
      "The essential resource for HTML, CSS, and JavaScript documentation by Mozilla.",
    url: "https://developer.mozilla.org",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    iconBg: "bg-violet-500/10",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#a78bfa" strokeWidth="1.5" />
        <path d="M7 8h10M7 12h6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="15" r="2" fill="#a78bfa" />
      </svg>
    ),
  },
  {
    title: "Next.js",
    description:
      "The React framework for production — hybrid static & server rendering, TypeScript support, and more.",
    url: "https://nextjs.org/docs",
    color: "from-zinc-500/20 to-neutral-500/20",
    borderColor: "border-zinc-500/30",
    iconBg: "bg-zinc-500/10",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    title: "TypeScript",
    description:
      "Typed JavaScript at any scale. Explore the official TypeScript documentation and handbook.",
    url: "https://www.typescriptlang.org/docs/",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <rect fill="#3178c6" width="128" height="128" rx="10" />
        <path fill="#fff" d="M82.8 90.4c2.2 3.6 5.4 6.2 9.6 7.8 4.2 1.6 8.6 2.2 13.4 1.8V113c-2.6.6-5.2 1-7.8 1.2-2.6.2-5.2.1-7.6-.2-2.4-.4-4.6-1-6.8-2-2.2-1-4-2.4-5.6-4.2-1.6-1.8-2.8-4-3.4-6.4-.6-2.4-.6-5.2.2-8.2h-.2c-1.2 2.2-2.8 4-4.6 5.4-1.8 1.4-4 2.6-6.2 3.4V87.6h-14v-11h14V57.2H50.6v-11H96v11H82.8v19.4h.2l-.2 14.8z" />
      </svg>
    ),
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building modern user interfaces.",
    url: "https://tailwindcss.com/docs",
    color: "from-teal-500/20 to-emerald-500/20",
    borderColor: "border-teal-500/30",
    iconBg: "bg-teal-500/10",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#38bdf8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Developer Resources
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Quick access to the most important documentation for building modern
            web applications.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative rounded-2xl border ${resource.borderColor}
                bg-gradient-to-br ${resource.color}
                p-6 transition-all duration-300
                hover:scale-[1.03] hover:shadow-xl hover:shadow-black/10
                dark:hover:shadow-black/30
              `}
            >
              {/* External link icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-zinc-400" />
              </div>

              {/* Logo */}
              <div
                className={`w-14 h-14 rounded-xl ${resource.iconBg} flex items-center justify-center mb-5`}
              >
                {resource.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 transition-colors">
                {resource.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {resource.description}
              </p>

              {/* URL hint */}
              <div className="mt-4 flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                <span className="truncate">
                  {resource.url.replace("https://", "")}
                </span>
                <ExternalLink className="h-3 w-3 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
