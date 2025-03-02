export interface Quiz {
  question: string;
  options?: string[];
  answer: string;
}

export interface Module {
  id: string;
  title: string;
  videoUrl: string;
  notes: string[];
  code?: string;
  quizzes: Quiz[];
  task: string;
}

export interface Course {
  id: string;
  title: string;
  language?: string;
  imageUrl: string;
  description: string;
  prerequisites: string[];
  what_you_learn: string[];
  progress: number;
  modules: Module[];
}

export interface UserCourses {
  courseId: string;
  progress: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  courses?: UserCourses[];
}