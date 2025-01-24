export type Lesson = {
  title: string;
  pictureUrl?: string;
  videoUrl?: string;
  content: string;
  isCompleted: boolean;
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
  isCompleted: boolean;
};

export type Quiz =
  | {
      id: string;
      type: "fill-blank";
      question: string;
      correctAnswer: string;
    }
  | {
      id: string;
      type: "multiple-choice";
      question: string;
      options: string[];
      correctAnswer: string;
    };

export type Course = {
  id: string;
  title: string;
  progress: number;
  description: string;
  whatUserLearn: string[];
  prerequisites?: string[];
  units: Module[];
  userCourse: boolean;
  quizzes: Quiz[];
};
