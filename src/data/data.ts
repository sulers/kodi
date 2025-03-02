import { Course } from "./types";

export const courses: Course[] = [
  {
    id: "courses1",
    title: "Introduction to React Native",
    imageUrl: "/images/react-native.png",
    language: "JavaScript",
    description:
      "Learn the basics of React Native and build your first mobile app.",
    prerequisites: ["Basic JavaScript", "Basic React"],
    what_you_learn: [
      "React Native Components",
      "State Management",
      "Navigation",
    ],
    progress: 0,
    modules: [
      {
        title: "Getting Started with React Native",
        videoUrl: "https://www.youtube.com/watch?v=Hf4MJH0jDb4",
        notes: [
          "React Native allows you to build mobile apps using JavaScript.",
          "It uses native components instead of web components.",
        ],
        code: "const App = () => <Text>Hello React Native!</Text>;",
        quizzes: [
          {
            question: "What is React Native?",
            options: [
              "A web development framework",
              "A mobile development framework",
              "A database technology",
            ],
            answer: "A mobile development framework",
          },
        ],
        task: "Create a simple React Native app that displays 'Hello, World!'.",
      },
    ],
  },
  {
    id: "course2",
    title: "Advanced JavaScript",
    imageUrl: "/images/download.png",
    language: "JavaScript",
    description: "Deep dive into JavaScript and learn advanced concepts.",
    prerequisites: ["Basic JavaScript"],
    what_you_learn: ["Closures", "Async/Await", "ES6+ Features"],
    progress: 0,
    modules: [
      {
        title: "Understanding Closures",
        videoUrl: "https://youtu.be/qikxEIxsXco?si=1mBo81hQX2XTyIW6",
        notes: [
          "A closure is a function that remembers the scope in which it was created.",
          "Closures help in data privacy and callback handling.",
        ],
        code: "function outer() {\n \tlet count = 0;\n \treturn function inner() {\n \t\tcount++;\n \t\treturn count;\n \t};\n}",
        quizzes: [
          {
            question: "What is a closure in JavaScript?",
            answer: "A function that retains access to its lexical scope.",
          },
          {
            question: "What is the difference between a function and a closure?",
            options: [
              "A closure is a function that retains access to its lexical scope.",
              "A function can only be called once.",
              "A closure is a function that can access variables from its outer scope.",
            ],
            answer: "A closure is a function that retains access to its lexical scope.",
          }
        ],
        task: "Write a function that demonstrates closure behavior.",
      },
    ],
  },
];

export const userCourses: Course[] = [
  {
    id: "course2",
    title: "Advanced JavaScript",
    language: "JavaScript",
    imageUrl: "/images/download.png",
    description: "Deep dive into JavaScript and learn advanced concepts.",
    prerequisites: ["Basic JavaScript"],
    what_you_learn: ["Closures", "Async/Await", "ES6+ Features"],
    progress: 0,
    modules: [
      {
        title: "Understanding Closures",
        videoUrl: "https://www.youtube.com/watch?v=qikxEIxsXco",
        notes: [
          "A closure is a function that remembers the scope in which it was created.",
          "Closures help in data privacy and callback handling.",
        ],
        code: "function outer() {\n \tlet count = 0;\n \treturn function inner() {\n \t\tcount++;\n \t\treturn count;\n \t};\n}",
        quizzes: [
          {
            question: "What is a closure in JavaScript?",
            answer: "A function that retains access to its lexical scope.",
          },
        ],
        task: "Write a function that demonstrates closure behavior.",
      },
    ],
  },
];
