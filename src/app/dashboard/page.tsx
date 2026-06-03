import Link from "next/link";
import { courses, getLessonCounts } from "@/lib/courses";

const dashboardNav = [
  "Dashboard",
  "My Courses",
  "Learning Tracks",
  "Membership",
  "Profile",
];

export default function DashboardPage() {
  const enrolledCourses = courses.filter((course) => course.enrolled);
  const recommendedCourses = courses.filter((course) => !course.enrolled);
  const completedLessons = enrolledCourses.reduce(
    (total, course) => total + getLessonCounts(course).completed,
    0,
  );
  const totalLessons = enrolledCourses.reduce(
    (total, course) => total + getLessonCounts(course).total,
    0,
  );
  const averageProgress = Math.round(
    enrolledCourses.reduce((total, course) => total + course.progress, 0) /
      enrolledCourses.length,
  );

  return (
    <main className="min-h-screen bg-[#0b1620] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(212,175,55,0.12),transparent_25%),linear-gradient(135deg,#0b1620_0%,#102231_50%,#071018_100%)]" />
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
          <nav className="flex gap-2 overflow-x-auto text-sm text-slate-200">
            {dashboardNav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition hover:border-emerald-200/40 hover:text-emerald-100"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="dashboard" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Welcome back
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Continue your autonomous mobility learning journey.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Your current roadmap combines AI foundations, visual perception,
              ROS 2, and practical autonomy stack thinking.
            </p>
            <Link
              href="/courses"
              className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#04110d] shadow-[0_0_30px_rgba(52,211,153,0.32)] transition hover:bg-emerald-300"
            >
              Browse Courses
            </Link>
          </div>

          <aside className="rounded-3xl border border-amber-200/20 bg-amber-200/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
              Current focus
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              AI & Computer Vision Track
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Next recommended lesson: Applied systems walkthrough in
              Foundations of Artificial Intelligence.
            </p>
          </aside>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Enrolled Courses", enrolledCourses.length.toString()],
            ["Completed Lessons", `${completedLessons}/${totalLessons}`],
            ["Learning Progress", `${averageProgress}%`],
            ["Certificates", "Coming soon"],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-2xl border border-white/15 bg-[#10202a] p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                {label}
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
              <div className="mt-5 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-emerald-300" />
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12" id="my-courses">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                Continue Learning
              </p>
              <h2 className="mt-2 text-3xl font-semibold">Pick up where you left off</h2>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-emerald-200 hover:text-emerald-100">
              View full catalogue
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {enrolledCourses.slice(0, 3).map((course) => {
              const lessonCounts = getLessonCounts(course);
              return (
                <article
                  key={course.id}
                  className="rounded-2xl border border-white/15 bg-[#10202a] p-6"
                >
                  <p className="text-sm text-emerald-200">{course.track}</p>
                  <h3 className="mt-3 text-xl font-semibold">{course.title}</h3>
                  <div className="mt-6 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    {lessonCounts.completed} / {lessonCounts.total} lessons completed
                  </p>
                  <Link
                    href={`/learn/${course.slug}`}
                    className="mt-6 inline-flex rounded-full border border-emerald-200/40 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300 hover:text-[#04110d]"
                  >
                    Continue
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold">My Courses</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {enrolledCourses.map((course) => (
              <article
                key={course.id}
                className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.055] p-6"
              >
                <span className="text-sm font-semibold text-amber-100">
                  {course.status}
                </span>
                <h3 className="mt-4 flex-1 text-xl font-semibold">{course.title}</h3>
                <p className="mt-4 text-sm text-slate-300">
                  {course.level} - {course.duration}
                </p>
                <div className="mt-5 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-300"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#071018] transition hover:bg-emerald-200"
                >
                  Open Course
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" id="learning-tracks">
          <h2 className="text-3xl font-semibold">Recommended Courses</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommendedCourses.map((course) => (
              <article
                key={course.id}
                className="rounded-2xl border border-white/15 bg-[#10202a] p-6"
              >
                <p className="text-sm font-semibold text-emerald-200">
                  {course.category}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
                <p className="mt-4 text-sm text-slate-300">{course.level}</p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-200/50 hover:text-emerald-100"
                >
                  View Course
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
