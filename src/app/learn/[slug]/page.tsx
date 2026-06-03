import Link from "next/link";
import { notFound } from "next/navigation";
import {
  courses,
  getCourseBySlug,
  getFirstAvailableLesson,
  getLessonCounts,
} from "@/lib/courses";

type LearnPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function LearnPage({ params }: LearnPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const lessonCounts = getLessonCounts(course);
  const selectedLesson =
    course.modules
      .flatMap((module) => module.lessons)
      .find((lesson) => !lesson.completed && !lesson.locked) ??
    getFirstAvailableLesson(course) ??
    course.modules[0].lessons[0];

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
          <nav className="flex flex-wrap gap-4 text-sm text-slate-200">
            <Link href="/dashboard" className="hover:text-emerald-100">
              Dashboard
            </Link>
            <Link href={`/courses/${course.slug}`} className="hover:text-emerald-100">
              Course Overview
            </Link>
            <Link href="/courses" className="hover:text-emerald-100">
              Catalogue
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[310px_1fr_280px] lg:px-10">
        <aside className="rounded-3xl border border-white/15 bg-[#10202a] p-5 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Course outline
          </p>
          <h1 className="mt-3 text-xl font-semibold leading-7">{course.title}</h1>
          <div className="mt-6 space-y-5">
            {course.modules.map((module) => (
              <section key={module.id}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {module.title}
                </h2>
                <div className="mt-3 space-y-2">
                  {module.lessons.map((lesson) => {
                    const isSelected = lesson.id === selectedLesson.id;
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        className={`w-full rounded-xl border px-3 py-3 text-left text-sm transition ${
                          isSelected
                            ? "border-emerald-200/50 bg-emerald-300/12 text-emerald-50"
                            : lesson.locked
                              ? "border-white/10 bg-white/[0.025] text-slate-500"
                              : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-emerald-200/30"
                        }`}
                      >
                        <span className="block font-medium">{lesson.title}</span>
                        <span className="mt-1 block text-xs capitalize text-slate-400">
                          {lesson.locked
                            ? "Locked"
                            : lesson.completed
                              ? "Completed"
                              : lesson.type}{" "}
                          - {lesson.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </aside>

        <section className="min-w-0 rounded-3xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 sm:p-7">
          <div className="flex flex-col gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                Active lesson
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {selectedLesson.title}
              </h2>
            </div>
            <span className="w-fit rounded-full border border-emerald-200/35 bg-emerald-300/10 px-4 py-2 text-sm font-semibold capitalize text-emerald-100">
              {selectedLesson.type}
            </span>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/15 bg-[#071018]">
            <div className="relative min-h-[260px] bg-[linear-gradient(rgba(52,211,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.08)_1px,transparent_1px)] bg-[size:32px_32px] sm:min-h-[360px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.2),transparent_36%),radial-gradient(circle_at_72%_72%,rgba(245,158,11,0.12),transparent_30%)]" />
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    {selectedLesson.type} workspace
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-white">
                    Learning content placeholder
                  </p>
                  <p className="mt-3 max-w-xl leading-7 text-slate-300">
                    Future versions can connect video hosting, readings, quizzes,
                    downloadable files, and completion events here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <article className="mt-7 rounded-2xl border border-white/15 bg-[#10202a] p-6">
            <h3 className="text-2xl font-semibold">Lesson brief</h3>
            <p className="mt-4 leading-8 text-slate-300">
              This lesson introduces the system-level context behind{" "}
              {selectedLesson.title.toLowerCase()} and connects the topic to
              practical autonomous mobility engineering workflows.
            </p>
          </article>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/15 bg-[#10202a] p-6">
              <h3 className="text-xl font-semibold">Resources</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Course notes and diagrams</li>
                <li>Engineering checklist</li>
                <li>Further reading references</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-amber-200/20 bg-amber-200/5 p-6">
              <h3 className="text-xl font-semibold">Study signal</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Focus on definitions, assumptions, data flow, and where this
                lesson fits in a complete autonomy stack.
              </p>
            </article>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#04110d] transition hover:bg-emerald-300"
            >
              Mark as Complete
            </button>
            <button
              type="button"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-emerald-200/50 hover:text-emerald-100"
            >
              Next Lesson
            </button>
          </div>
        </section>

        <aside className="rounded-3xl border border-white/15 bg-[#10202a] p-6 lg:sticky lg:top-6 lg:h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Progress
          </p>
          <p className="mt-4 text-4xl font-semibold text-emerald-100">
            {course.progress}%
          </p>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-emerald-300"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-slate-300">
            {lessonCounts.completed} / {lessonCounts.total} lessons completed
          </p>
          <div className="mt-7 border-t border-white/15 pt-6">
            <p className="text-sm text-slate-400">Course track</p>
            <p className="mt-2 font-semibold text-white">{course.track}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-slate-400">Duration</p>
            <p className="mt-2 font-semibold text-white">{course.duration}</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
