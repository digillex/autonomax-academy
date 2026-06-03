import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug, getLessonCounts } from "@/lib/courses";
import {
  coursePurchaseUrl,
  mainSiteProductsUrl,
  mainSiteUrl,
} from "@/lib/links";

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const lessonCounts = getLessonCounts(course);
  const learningOutcomes = [
    `Understand the core engineering language of ${course.category.toLowerCase()}.`,
    "Connect course concepts to autonomous mobility system design.",
    "Evaluate practical tradeoffs, risks, and implementation patterns.",
    "Build a stronger roadmap for advanced study and professional practice.",
  ];
  const cta =
    course.status === "Coming Soon"
      ? { label: "Notify Me", href: "#", external: false }
      : course.enrolled
        ? { label: "Continue Learning", href: `/learn/${course.slug}`, external: false }
        : course.status === "Paid"
          ? {
              label: "Buy Course",
              href: coursePurchaseUrl(course.slug),
              external: true,
            }
          : {
              label: "Get Access",
              href: mainSiteProductsUrl,
              external: true,
            };

  return (
    <main className="min-h-screen bg-[#0b1620] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(212,175,55,0.12),transparent_25%),linear-gradient(135deg,#0b1620_0%,#102231_50%,#071018_100%)]" />
      <header className="border-b border-white/15 bg-[#0b1620]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/35 bg-emerald-400/10 text-sm font-bold text-emerald-100">
              AX
            </span>
            <span className="text-lg font-semibold tracking-wide">
              Autonomax Academy
            </span>
          </Link>
          <Link href="/courses" className="text-sm font-semibold text-emerald-100">
            All Courses
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              {course.category} / {course.track}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {course.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {[course.level, course.duration, course.status].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-[#071018]/60 px-4 py-2 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-200/25 bg-[#10202a] p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              Access status
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{course.status}</h2>
            {course.enrolled ? (
              <div className="mt-6">
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-300"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {lessonCounts.completed} / {lessonCounts.total} lessons completed
                </p>
              </div>
            ) : (
              <p className="mt-5 leading-7 text-slate-300">
                Preview the syllabus, then complete purchase on Autonomax.site
                (products, cart, and checkout).
              </p>
            )}
            {cta.external ? (
              <a
                href={cta.href}
                className="mt-7 inline-flex w-full justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#04110d] transition hover:bg-emerald-300"
              >
                {cta.label}
              </a>
            ) : (
              <Link
                href={cta.href}
                className="mt-7 inline-flex w-full justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#04110d] transition hover:bg-emerald-300"
              >
                {cta.label}
              </Link>
            )}
            {!course.enrolled && course.status !== "Coming Soon" ? (
              <p className="mt-4 text-center text-xs text-slate-400">
                Checkout on{" "}
                <a
                  href={mainSiteUrl}
                  className="font-semibold text-emerald-200 hover:text-emerald-100"
                >
                  autonomax.site
                </a>
              </p>
            ) : null}
          </aside>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-3xl border border-white/15 bg-[#10202a] p-7">
            <h2 className="text-2xl font-semibold">Learning outcomes</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {learningOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 leading-7">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-amber-200" />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/15 bg-white/[0.055] p-7">
            <h2 className="text-2xl font-semibold">Modules and lessons</h2>
            <div className="mt-6 space-y-5">
              {course.modules.map((module) => (
                <article key={module.id} className="rounded-2xl border border-white/15 bg-[#071018]/50 p-5">
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <div className="mt-4 space-y-3">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-medium text-slate-100">{lesson.title}</p>
                          <p className="text-sm text-slate-400">
                            {lesson.type} - {lesson.duration}
                          </p>
                        </div>
                        <span className="text-sm text-slate-300">
                          {lesson.locked ? "Locked" : lesson.completed ? "Completed" : "Available"}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
