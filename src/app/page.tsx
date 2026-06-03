import { mainSiteProductsUrl, mainSiteUrl } from "@/lib/links";

const focusAreas = [
  {
    title: "AI & Machine Learning",
    description:
      "Core models, learning systems, and applied AI foundations for autonomous technologies.",
  },
  {
    title: "Computer Vision",
    description:
      "Image processing, perception pipelines, detection, segmentation, and visual intelligence.",
  },
  {
    title: "Sensor Fusion",
    description:
      "Combine camera, radar, lidar, GNSS, and inertial data into reliable mobility awareness.",
  },
  {
    title: "Autonomous Mobility",
    description:
      "System design for self-driving platforms, smart mobility, and next-generation transport.",
  },
];

const courses = [
  {
    title: "Foundations of Artificial Intelligence",
    category: "AI Systems",
    level: "Beginner",
    duration: "6 weeks",
    description:
      "Build a practical foundation in AI concepts, model thinking, and intelligent system design.",
    status: "Preview ready",
  },
  {
    title: "Computer Vision Fundamentals",
    category: "Perception",
    level: "Beginner",
    duration: "5 weeks",
    description:
      "Learn how machines interpret images, extract features, and reason from visual inputs.",
    status: "Enrollment soon",
  },
  {
    title: "Deep Learning for Visual Perception",
    category: "Deep Learning",
    level: "Intermediate",
    duration: "8 weeks",
    description:
      "Study neural perception models for detection, tracking, segmentation, and scene awareness.",
    status: "In production",
  },
  {
    title: "Sensor Fusion Fundamentals",
    category: "Robotics",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Understand multi-sensor reasoning, uncertainty, calibration, and state estimation.",
    status: "Enrollment soon",
  },
  {
    title: "ROS 2 for Autonomous Systems",
    category: "Robotics Stack",
    level: "Intermediate",
    duration: "7 weeks",
    description:
      "Design modular autonomous applications with ROS 2 nodes, topics, services, and simulation.",
    status: "Preview ready",
  },
  {
    title: "Autonomous Vehicle Architecture",
    category: "Vehicle Systems",
    level: "Advanced",
    duration: "9 weeks",
    description:
      "Explore perception, planning, control, compute, safety layers, and autonomy stack integration.",
    status: "In production",
  },
  {
    title: "Safety Engineering for Autonomous Mobility",
    category: "Safety",
    level: "Advanced",
    duration: "6 weeks",
    description:
      "Study risk, validation, operational design domains, and safety-led engineering practice.",
    status: "Planned",
  },
  {
    title: "Global Autonomous Vehicle Industry Trends",
    category: "Industry",
    level: "All levels",
    duration: "4 weeks",
    description:
      "Track global deployment patterns, policy movement, business models, and market signals.",
    status: "Preview ready",
  },
];

const tracks = [
  {
    title: "AI & Computer Vision Track",
    description:
      "From AI foundations to visual perception systems used in robotics and autonomous mobility.",
    modules: "AI, deep learning, perception, evaluation",
  },
  {
    title: "Sensor Fusion & Robotics Track",
    description:
      "Build practical fluency in robotics middleware, state estimation, and sensor integration.",
    modules: "ROS 2, calibration, fusion, localization",
  },
  {
    title: "Self-Driving Vehicle Systems Track",
    description:
      "Understand how autonomy stacks connect perception, planning, control, safety, and compute.",
    modules: "Architecture, planning, safety, simulation",
  },
  {
    title: "Smart Mobility & Policy Track",
    description:
      "Study urban transport systems, autonomous mobility deployment, regulation, and global trends.",
    modules: "Mobility systems, policy, markets, operations",
  },
];

const memberships = [
  {
    title: "Free Preview Access",
    price: "$0",
    description:
      "Explore selected lessons, academy updates, course previews, and introductory mobility briefings.",
    features: ["Preview lessons", "Learning roadmap", "Academy newsletter"],
  },
  {
    title: "Monthly Academy Access",
    price: "Monthly",
    description:
      "Access the structured course library, technical notes, and new lessons as they are released.",
    features: ["All active courses", "Track guidance", "Monthly briefings"],
  },
  {
    title: "Lifetime Academy Access",
    price: "Lifetime",
    description:
      "One-time access for long-term learners building deep capability in autonomous systems.",
    features: ["Lifetime course access", "Future updates", "Premium resources"],
  },
];

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Tracks", href: "#tracks" },
  { label: "Membership", href: "#membership" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const footerLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Membership", href: "#membership" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1620] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(212,175,55,0.14),transparent_24%),linear-gradient(135deg,#0b1620_0%,#102231_48%,#071018_100%)]" />
      <header className="sticky top-0 z-30 border-b border-white/15 bg-[#0b1620]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3" aria-label="Autonomax Academy home">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-400/10 text-sm font-bold text-emerald-200 shadow-[0_0_35px_rgba(16,185,129,0.28)]">
              AX
            </span>
            <span className="text-lg font-semibold tracking-wide text-white">
              Autonomax Academy
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-emerald-200">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/dashboard"
            className="rounded-full border border-emerald-300/40 bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#02100b] shadow-[0_0_30px_rgba(52,211,153,0.35)] transition hover:bg-emerald-300"
          >
            Start Learning
          </a>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-50">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
            Structured learning for autonomous systems
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Learn AI, Robotics, and Autonomous Mobility Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Autonomax Academy provides structured learning for computer vision,
            sensor fusion, self-driving technology, smart mobility, and future
            transport systems.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/courses"
              className="rounded-full bg-emerald-400 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#04110d] shadow-[0_0_34px_rgba(52,211,153,0.34)] transition hover:bg-emerald-300"
            >
              Explore Courses
            </a>
            <a
              href="#membership"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-amber-200/50 hover:text-amber-100"
            >
              View Membership
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm text-slate-300">
            <div>
              <strong className="block text-2xl text-white">8</strong>
              Featured courses
            </div>
            <div>
              <strong className="block text-2xl text-white">4</strong>
              Learning tracks
            </div>
            <div>
              <strong className="block text-2xl text-white">360</strong>
              Mobility scope
            </div>
          </div>
        </div>

        <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-white/15 bg-[#10202a] p-5 shadow-2xl shadow-emerald-950/25">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_75%_75%,rgba(245,158,11,0.12),transparent_30%)]" />
          <div className="absolute left-8 right-8 top-10 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-emerald-100/70">
            <span>Autonomy Lab</span>
            <span>Live Map</span>
          </div>
          <div className="absolute left-1/2 top-1/2 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[48%] border border-emerald-200/30 shadow-[0_0_80px_rgba(16,185,129,0.18)]" />
          <div className="absolute left-[18%] top-[26%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,1)]" />
          <div className="absolute left-[35%] top-[64%] h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_22px_rgba(252,211,77,0.9)]" />
          <div className="absolute left-[68%] top-[33%] h-3 w-3 rounded-full bg-emerald-200 shadow-[0_0_24px_rgba(167,243,208,1)]" />
          <div className="absolute left-[76%] top-[72%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.85)]" />
          <div className="absolute left-[19%] top-[29%] h-[2px] w-[54%] rotate-[13deg] bg-gradient-to-r from-emerald-300 via-emerald-100 to-transparent" />
          <div className="absolute left-[36%] top-[65%] h-[2px] w-[42%] -rotate-[27deg] bg-gradient-to-r from-amber-200 via-emerald-200 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
            {["Vision", "Fusion", "Control"].map((label) => (
              <div key={label} className="rounded-xl border border-white/15 bg-[#071018]/65 p-4 backdrop-blur">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</span>
                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-emerald-300" style={{ width: label === "Vision" ? "78%" : label === "Fusion" ? "64%" : "86%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-xl shadow-black/20">
              <div className="mb-5 h-10 w-10 rounded-lg border border-emerald-200/30 bg-emerald-300/10" />
              <h2 className="text-xl font-semibold text-white">{area.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Featured courses</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Technical learning for the autonomy era
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-300">
            Each course is designed to connect theory, engineering context, and
            practical system thinking across AI, robotics, and mobility.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <article key={course.title} className="flex min-h-[290px] flex-col rounded-2xl border border-white/15 bg-[#10202a] p-6 transition hover:-translate-y-1 hover:border-emerald-200/45 hover:bg-[#132936]">
              <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
                <span className="text-emerald-200">{course.category}</span>
                <span className="rounded-full border border-amber-200/25 px-3 py-1 text-amber-100">{course.status}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-white">{course.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">{course.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-sm text-slate-200">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tracks" className="border-y border-white/15 bg-white/[0.055]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Learning tracks</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Follow a structured path from foundations to systems.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {tracks.map((track) => (
              <article key={track.title} className="rounded-2xl border border-white/15 bg-[#071018]/45 p-7">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">{track.modules}</p>
                <h3 className="text-2xl font-semibold text-white">{track.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{track.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Membership</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Choose your academy access.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {memberships.map((membership) => (
            <article key={membership.title} className="rounded-2xl border border-white/15 bg-[#10202a] p-7">
              <h3 className="text-2xl font-semibold text-white">{membership.title}</h3>
              <p className="mt-4 text-3xl font-semibold text-emerald-200">{membership.price}</p>
              <p className="mt-4 leading-7 text-slate-300">{membership.description}</p>
              <ul className="mt-7 space-y-3 text-sm text-slate-200">
                {membership.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-200" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={mainSiteProductsUrl}
                className="mt-8 inline-flex rounded-full border border-emerald-200/35 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300 hover:text-[#04110d]"
              >
                Select access
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-2xl border border-amber-200/20 bg-amber-200/5 p-5 text-sm leading-7 text-amber-50">
          Payments and access management will be handled through Autonomax.site.
        </p>
      </section>

      <footer id="contact" className="border-t border-white/15 bg-[#071018]/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Autonomax Academy</h2>
            <p className="mt-3 text-slate-300">
              Parent platform:{" "}
              <a href={mainSiteUrl} className="font-semibold text-emerald-200 hover:text-emerald-100">
                autonomax.site
              </a>
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-emerald-200">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-7 text-slate-400">
              Educational content only. Technical and professional decisions
              should be made using proper engineering judgment and applicable
              regulations.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
