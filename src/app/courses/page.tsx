"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { courses } from "@/lib/courses";
import { coursePurchaseUrl, mainSiteProductsUrl } from "@/lib/links";

const categories = ["All", ...Array.from(new Set(courses.map((course) => course.category)))];

const statusStyles = {
  "Free Preview": "border-emerald-200/35 bg-emerald-300/10 text-emerald-100",
  Paid: "border-amber-200/35 bg-amber-200/10 text-amber-100",
  "Coming Soon": "border-slate-200/25 bg-white/10 text-slate-200",
};

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const visibleCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory = category === "All" || course.category === category;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [course.title, course.description, course.category, course.track, ...course.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  return (
    <main className="min-h-screen bg-[#0b1620] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(212,175,55,0.12),transparent_25%),linear-gradient(135deg,#0b1620_0%,#102231_50%,#071018_100%)]" />
      <header className="border-b border-white/15 bg-[#0b1620]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/35 bg-emerald-400/10 text-sm font-bold text-emerald-100">
              AX
            </span>
            <span className="text-lg font-semibold tracking-wide">
              Autonomax Academy
            </span>
          </Link>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-200">
            <Link href="/dashboard" className="hover:text-emerald-100">
              Dashboard
            </Link>
            <Link href="/courses" className="text-emerald-100">
              Courses
            </Link>
            <a href={mainSiteProductsUrl} className="hover:text-emerald-100">
              Membership
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Course catalogue
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Explore AI, robotics, and autonomous mobility courses.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Browse structured learning across perception, sensor fusion,
              robotics systems, self-driving architecture, safety, and mobility
              industry intelligence.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.055] p-5">
            <label htmlFor="course-search" className="text-sm font-semibold text-slate-200">
              Search courses
            </label>
            <input
              id="course-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, track, or tag"
              className="mt-3 w-full rounded-xl border border-white/15 bg-[#071018] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-200/60"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "border-emerald-200/50 bg-emerald-300 text-[#04110d]"
                  : "border-white/15 bg-white/[0.04] text-slate-200 hover:border-emerald-200/40 hover:text-emerald-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleCourses.map((course) => (
            <article
              key={course.id}
              className="flex min-h-[360px] flex-col rounded-2xl border border-white/15 bg-[#10202a] p-6 shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:border-emerald-200/45"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-emerald-200">
                  {course.category}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[course.status]}`}
                >
                  {course.status}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-7">{course.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate-300">
                {course.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-sm text-slate-300">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex-1 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#071018] transition hover:bg-emerald-200"
                >
                  View Course
                </Link>
                {course.status !== "Coming Soon" && !course.enrolled ? (
                  <a
                    href={
                      course.status === "Paid"
                        ? coursePurchaseUrl(course.slug)
                        : mainSiteProductsUrl
                    }
                    className="flex-1 rounded-full border border-emerald-200/40 bg-emerald-400/90 px-4 py-3 text-center text-sm font-semibold text-[#04110d] transition hover:bg-emerald-300"
                  >
                    {course.status === "Paid" ? "Buy" : "Get Access"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
