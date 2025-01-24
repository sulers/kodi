import { Course } from "./types";

export const courses: Course[] = [
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    progress: 0,
    description:
      "Learn the basics of Python programming, including syntax, functions, and data structures.",
    whatUserLearn: [
      "Python syntax and basic programming concepts",
      "Variables, data types, and control structures",
      "Functions and error handling",
      "Working with lists, dictionaries, and sets",
    ],
    prerequisites: ["Basic computer skills"],
    units: [
      {
        id: "module-1",
        title: "Introduction to Python",
        isCompleted: false,
        lessons: [
          {
            title: "What is Python?",
            content: "Python is a high-level programming language...",
            isCompleted: false,
          },
          {
            title: "Installing Python",
            content: "To install Python, go to python.org...",
            isCompleted: false,
          },
        ],
      },
      {
        id: "module-2",
        title: "Python Basics",
        isCompleted: false,
        lessons: [
          {
            title: "Variables and Data Types",
            content: "In Python, variables store data...",
            isCompleted: false,
          },
          {
            title: "Basic Input and Output",
            content: "Use `input()` to get user input...",
            isCompleted: false,
          },
        ],
      },
    ],
    userCourse: true,
    quizzes: [
      {
        id: "python-quiz-1",
        type: "fill-blank",
        question: "Python is a ____-level programming language.",
        correctAnswer: "high",
      },
      {
        id: "python-quiz-2",
        type: "multiple-choice",
        question: "Which of the following is a valid Python variable name?",
        options: ["1variable", "_variable", "var-name", "import"],
        correctAnswer: "_variable",
      },
      {
        id: "python-quiz-3",
        type: "fill-blank",
        question: "The function used to display text in Python is ___.",
        correctAnswer: "print",
      },
      {
        id: "python-quiz-4",
        type: "multiple-choice",
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "def", "define", "lambda"],
        correctAnswer: "def",
      },
    ],
  },
  {
    id: "js-game-dev",
    title: "Game Development with JavaScript",
    progress: 0,
    description:
      "Learn how to create interactive games using JavaScript and HTML5 Canvas.",
    whatUserLearn: [
      "JavaScript basics for game development",
      "Using the HTML5 Canvas API",
      "Handling user input",
      "Building simple 2D games",
    ],
    prerequisites: ["Basic JavaScript knowledge", "HTML and CSS basics"],
    units: [
      {
        id: "module-1",
        title: "Getting Started with JavaScript for Games",
        isCompleted: false,
        lessons: [
          {
            title: "Introduction to JavaScript for Games",
            content: "JavaScript is widely used for web-based games...",
            isCompleted: false,
          },
          {
            title: "Setting Up Your Development Environment",
            content: "To start coding, install VS Code...",
            isCompleted: false,
          },
        ],
      },
      {
        id: "module-2",
        title: "Drawing and Animation",
        isCompleted: false,
        lessons: [
          {
            title: "Using the Canvas API",
            content: "Canvas allows you to draw graphics...",
            isCompleted: false,
          },
          {
            title: "Animating Objects",
            content: "To animate objects, use `requestAnimationFrame()`...",
            isCompleted: false,
          },
        ],
      },
    ],
    userCourse: true,
    quizzes: [
      {
        id: "js-quiz-1",
        type: "fill-blank",
        question:
          "The HTML5 ____ API is used for rendering graphics in a game.",
        correctAnswer: "Canvas",
      },
      {
        id: "js-quiz-2",
        type: "multiple-choice",
        question:
          "Which function is used to update the game frame in JavaScript?",
        options: [
          "setInterval()",
          "requestAnimationFrame()",
          "setTimeout()",
          "drawGame()",
        ],
        correctAnswer: "requestAnimationFrame()",
      },
      {
        id: "js-quiz-3",
        type: "fill-blank",
        question:
          "To detect keyboard input, you use the ____ event in JavaScript.",
        correctAnswer: "keydown",
      },
      {
        id: "js-quiz-4",
        type: "multiple-choice",
        question:
          "Which data structure is commonly used to store game objects in JavaScript?",
        options: ["Array", "Queue", "Stack", "Tree"],
        correctAnswer: "Array",
      },
    ],
  },
];
