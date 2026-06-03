export type LessonType = "video" | "reading" | "quiz" | "assignment";

export type Lesson = {
  id: string;
  title: string;
  type: LessonType;
  duration: string;
  completed: boolean;
  locked: boolean;
};

export type CourseModule = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  category: string;
  track: string;
  level: string;
  duration: string;
  status: "Free Preview" | "Paid" | "Coming Soon";
  description: string;
  tags: string[];
  progress: number;
  enrolled: boolean;
  modules: CourseModule[];
};

const createModules = (
  prefix: string,
  topic: string,
  completedLessons: number,
  lockFromLesson = 999,
): CourseModule[] => {
  const lessonTitles = [
    [`${topic} orientation`, "Core concepts and terminology", "Applied systems walkthrough"],
    ["Architecture and workflow", "Engineering tradeoffs", "Knowledge check"],
    ["Practical implementation patterns", "Validation and review", "Capstone assignment"],
  ];

  let lessonIndex = 0;

  return lessonTitles.map((titles, moduleIndex) => ({
    id: `${prefix}-m${moduleIndex + 1}`,
    title:
      moduleIndex === 0
        ? "Foundations"
        : moduleIndex === 1
          ? "System Design"
          : "Applied Practice",
    lessons: titles.map((title, titleIndex) => {
      lessonIndex += 1;
      return {
        id: `${prefix}-l${lessonIndex}`,
        title,
        type:
          titleIndex === 2 && moduleIndex === 1
            ? "quiz"
            : titleIndex === 2 && moduleIndex === 2
              ? "assignment"
              : titleIndex === 1
                ? "reading"
                : "video",
        duration:
          titleIndex === 2 && moduleIndex === 2
            ? "45 min"
            : titleIndex === 2 && moduleIndex === 1
              ? "15 min"
              : titleIndex === 1
                ? "22 min"
                : "28 min",
        completed: lessonIndex <= completedLessons,
        locked: lessonIndex >= lockFromLesson,
      };
    }),
  }));
};

export const courses: Course[] = [
  {
    id: "ai-foundations",
    slug: "foundations-of-artificial-intelligence",
    title: "Foundations of Artificial Intelligence",
    category: "AI Systems",
    track: "AI & Computer Vision Track",
    level: "Beginner",
    duration: "6 weeks",
    status: "Free Preview",
    description:
      "Build a practical foundation in AI concepts, model thinking, and intelligent system design for autonomy-focused applications.",
    tags: ["AI", "Machine Learning", "Autonomy"],
    progress: 72,
    enrolled: true,
    modules: createModules("ai", "Artificial intelligence", 6),
  },
  {
    id: "cv-fundamentals",
    slug: "computer-vision-fundamentals",
    title: "Computer Vision Fundamentals",
    category: "Perception",
    track: "AI & Computer Vision Track",
    level: "Beginner",
    duration: "5 weeks",
    status: "Paid",
    description:
      "Learn how machines interpret images, extract visual features, and reason from camera data in mobility environments.",
    tags: ["Vision", "Cameras", "Perception"],
    progress: 45,
    enrolled: true,
    modules: createModules("cv", "Computer vision", 4),
  },
  {
    id: "visual-perception",
    slug: "deep-learning-for-visual-perception",
    title: "Deep Learning for Visual Perception",
    category: "Deep Learning",
    track: "AI & Computer Vision Track",
    level: "Intermediate",
    duration: "8 weeks",
    status: "Paid",
    description:
      "Study neural perception models for detection, tracking, segmentation, and scene understanding in autonomous systems.",
    tags: ["Deep Learning", "Detection", "Segmentation"],
    progress: 18,
    enrolled: true,
    modules: createModules("dl", "Visual perception", 2),
  },
  {
    id: "fusion-fundamentals",
    slug: "sensor-fusion-fundamentals",
    title: "Sensor Fusion Fundamentals",
    category: "Sensor Fusion",
    track: "Sensor Fusion & Robotics Track",
    level: "Intermediate",
    duration: "6 weeks",
    status: "Paid",
    description:
      "Understand multi-sensor reasoning, uncertainty, calibration, and state estimation for reliable mobility awareness.",
    tags: ["Fusion", "Radar", "Lidar", "State Estimation"],
    progress: 0,
    enrolled: false,
    modules: createModules("fusion", "Sensor fusion", 0, 4),
  },
  {
    id: "ros2-autonomy",
    slug: "ros-2-for-autonomous-systems",
    title: "ROS 2 for Autonomous Systems",
    category: "Robotics Stack",
    track: "Sensor Fusion & Robotics Track",
    level: "Intermediate",
    duration: "7 weeks",
    status: "Free Preview",
    description:
      "Design modular autonomous applications with ROS 2 nodes, topics, services, launch files, and simulation workflows.",
    tags: ["ROS 2", "Robotics", "Middleware"],
    progress: 63,
    enrolled: true,
    modules: createModules("ros2", "ROS 2 autonomy", 5),
  },
  {
    id: "av-architecture",
    slug: "autonomous-vehicle-architecture",
    title: "Autonomous Vehicle Architecture",
    category: "Vehicle Systems",
    track: "Self-Driving Vehicle Systems Track",
    level: "Advanced",
    duration: "9 weeks",
    status: "Paid",
    description:
      "Explore how perception, planning, control, compute, safety layers, and autonomy stack integration work together.",
    tags: ["Architecture", "Planning", "Control"],
    progress: 0,
    enrolled: false,
    modules: createModules("av", "Autonomous vehicle architecture", 0, 5),
  },
  {
    id: "safety-engineering",
    slug: "safety-engineering-for-autonomous-mobility",
    title: "Safety Engineering for Autonomous Mobility",
    category: "Safety",
    track: "Self-Driving Vehicle Systems Track",
    level: "Advanced",
    duration: "6 weeks",
    status: "Coming Soon",
    description:
      "Study risk, validation, operational design domains, safety cases, and engineering practice for autonomy programs.",
    tags: ["Safety", "Validation", "ODD"],
    progress: 0,
    enrolled: false,
    modules: createModules("safe", "Safety engineering", 0, 1),
  },
  {
    id: "industry-trends",
    slug: "global-autonomous-vehicle-industry-trends",
    title: "Global Autonomous Vehicle Industry Trends",
    category: "Industry",
    track: "Smart Mobility & Policy Track",
    level: "All levels",
    duration: "4 weeks",
    status: "Free Preview",
    description:
      "Track global deployment patterns, policy movement, business models, and market signals shaping autonomous mobility.",
    tags: ["Industry", "Policy", "Smart Mobility"],
    progress: 0,
    enrolled: false,
    modules: createModules("trend", "Industry trends", 0, 6),
  },
];

export const getCourseBySlug = (slug: string) =>
  courses.find((course) => course.slug === slug);

export const getLessonCounts = (course: Course) => {
  const lessons = course.modules.flatMap((module) => module.lessons);
  const completed = lessons.filter((lesson) => lesson.completed).length;

  return {
    completed,
    total: lessons.length,
  };
};

export const getFirstAvailableLesson = (course: Course) =>
  course.modules
    .flatMap((module) => module.lessons)
    .find((lesson) => !lesson.locked);
