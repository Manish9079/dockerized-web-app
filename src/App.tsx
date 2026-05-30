import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
}

const PROJECTS: Project[] = [
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'A fast, accessible dashboard with real-time charts, role-based access, and an opinionated design system.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Charts'],
    href: '#',
    repo: '#',
  },
  {
    title: 'AI Notes Companion',
    description:
      'Search, summarize, and organize notes with a clean offline-first editor and smart highlights.',
    tags: ['Vite', 'IndexedDB', 'LLM', 'UX'],
    href: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Performance Kit',
    description:
      'A set of patterns + components that reduced LCP and improved conversion with better loading states and caching.',
    tags: ['Web Perf', 'Design Systems', 'A/B Testing'],
    href: '#',
    repo: '#',
  },
]

const SKILLS = [
  'TypeScript',
  'React',
  'Node.js',
  'REST / GraphQL',
  'Testing',
  'CI/CD',
  'Web Performance',
  'Accessibility',
  'Design Systems',
]

const LINKS = {
  email: 'you@example.com',
  github: 'https://github.com/your-handle',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  location: 'Your City, Country',
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
      show: { opacity: 1, y: 0 },
    }),
    [prefersReducedMotion],
  )

  return (
    <div className="min-h-dvh bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))] opacity-[0.10] blur-[110px]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[460px] w-[460px] rounded-full bg-fuchsia-500/10 blur-[110px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="group inline-flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-sm">
              <Sparkles className="size-4 text-[rgb(var(--accent))]" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Your Name
              <span className="ml-2 hidden text-xs font-medium text-[rgb(var(--muted))] sm:inline">
                — Product Engineer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href="#projects">
              Projects
            </a>
            <a className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href="#experience">
              Experience
            </a>
            <a className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm font-medium shadow-sm hover:shadow-md"
              href={`mailto:${LINKS.email}`}
            >
              <Mail className="size-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-sm hover:shadow-md"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-14">
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-1 text-xs font-medium text-[rgb(var(--muted))] shadow-sm">
              <MapPin className="size-3.5" />
              {LINKS.location}
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              I build delightful product experiences — fast, accessible, and scalable.
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[rgb(var(--muted))] sm:text-lg">
              I’m a product-minded engineer who ships end-to-end features, sweats the details, and turns
              ambiguous problems into clean interfaces and maintainable systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                View projects <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                Let’s work together <BriefcaseBusiness className="size-4" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                GitHub <GitBranch className="size-4" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                LinkedIn <Link2 className="size-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-glow">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold">Now</p>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                  Building web apps, design systems, and AI-assisted workflows.
                </p>
              </div>
              <div className="grid size-12 place-items-center rounded-2xl bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))]">
                <Code2 className="size-5" />
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-[rgb(var(--border))] p-4">
                <dt className="text-[rgb(var(--muted))]">Focus</dt>
                <dd className="mt-1 font-semibold">Frontend + DX</dd>
              </div>
              <div className="rounded-xl border border-[rgb(var(--border))] p-4">
                <dt className="text-[rgb(var(--muted))]">Strength</dt>
                <dd className="mt-1 font-semibold">Shipping</dd>
              </div>
              <div className="rounded-xl border border-[rgb(var(--border))] p-4">
                <dt className="text-[rgb(var(--muted))]">Current</dt>
                <dd className="mt-1 font-semibold">Open to work</dd>
              </div>
              <div className="rounded-xl border border-[rgb(var(--border))] p-4">
                <dt className="text-[rgb(var(--muted))]">Stack</dt>
                <dd className="mt-1 font-semibold">TS / React</dd>
              </div>
            </dl>
          </div>
        </motion.section>

        <section id="projects" className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured projects</h2>
              <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--muted))] sm:text-base">
                A few recent builds. Swap the links + descriptions with your real work.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                  <span className="grid size-9 place-items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--muted))] group-hover:text-[rgb(var(--fg))]">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[rgb(var(--border))] px-2.5 py-1 text-xs text-[rgb(var(--muted))]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  {p.href ? (
                    <a
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[rgb(var(--fg))] hover:underline"
                    >
                      Live <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                  {p.repo ? (
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[rgb(var(--fg))] hover:underline"
                    >
                      Code <GitBranch className="size-4" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))] sm:text-base">
              Highlight outcomes and impact. Keep it skimmable.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Senior Frontend Engineer</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">Company • 2024 — Present</p>
                  </div>
                  <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs text-[rgb(var(--muted))]">
                    React / TS
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
                  <li>Shipped core onboarding flow, improving activation by 18%.</li>
                  <li>Built a component library that reduced UI regressions and sped up delivery.</li>
                  <li>Led performance work: LCP -35% across key pages.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">Full-stack Engineer</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">Startup • 2022 — 2024</p>
                  </div>
                  <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs text-[rgb(var(--muted))]">
                    Node / APIs
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[rgb(var(--muted))]">
                  <li>Designed API contracts and telemetry to support product iteration.</li>
                  <li>Improved build + deploy pipelines; cut deploy time from 12m to 4m.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted))] sm:text-base">
              Tools I use frequently to build and ship.
            </p>
            <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm">
              <ul className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-[rgb(var(--accent))]/10 px-3 py-1.5 text-xs font-medium text-[rgb(var(--accent))]"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
                <p className="text-sm font-semibold">What I care about</p>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  Clarity, performance, and great UX. Clean code is a byproduct of good product thinking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20">
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-glow">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something</h2>
            <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--muted))] sm:text-base">
              If you’re hiring or want to collaborate, send a note. I’m happy to chat about product,
              design systems, and shipping high-quality web apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--accent))] px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                Email me <Mail className="size-4" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                Connect <Link2 className="size-4" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md"
              >
                See code <GitBranch className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgb(var(--border))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[rgb(var(--muted))]">
            © {new Date().getFullYear()} Your Name. Built with Vite + React.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href="#top">
              Back to top
            </a>
            <span className="text-[rgb(var(--border))]">•</span>
            <a className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]" href={`mailto:${LINKS.email}`}>
              {LINKS.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
