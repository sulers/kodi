import { Course } from "./types";

export const courses: Course[] = [
  {
    id: "introduction-to-cpp",
    title: "Introduction to C++",
    language: "C++",
    imageUrl: "/kodi/cpp.jpg",
    description: "Jifunze misingi ya C++",
    prerequisites: [
      "Kuweza kutumia kompyuta",
      "Kuwa na exp japo kidogo na kucode",
    ],
    what_you_learn: [
      "Kuandika program za kompyuta kwa C++",
      "Data types in C++",
      "Loops, conditionals etc",
    ],
    progress: 0,
    modules: [
      {
        id: "module1",
        title: "Introduction to C++",
        videoUrl: "https://youtu.be/ZlV4gJLz3fs?si=485sZon0YjgUo4fL",
        notes: ["Lorem Ipsum is true", "Lorem Ipsum is false"],
        code: '#include <iostream>\nusing namespace std;int main() {cout << "Hello, World!" << endl;return 0;}',
        quizzes: [
          {
            question:
              "What is the correct syntax to print 'Hello, World!' in C++?",
            options: [
              "print('Hello, World!');",
              "cout << 'Hello, World!';",
              "Console.WriteLine('Hello, World!');",
              "System.out.println('Hello, World!');",
            ],
            answer: "cout << 'Hello, World!';",
          },
          {
            question:
              "Which header file is required for input and output in C++?",
            options: ["stdio.h", "iostream", "stdlib.h", "conio.h"],
            answer: "iostream",
          },
          {
            question: "What is the entry point of a C++ program?",
            options: ["start()", "main()", "init()", "run()"],
            answer: "main()",
          },
          {
            question: 'What is the output of `cout << "1" + "2" << endl;`?',
            answer: "12",
          },
        ],
        task: "Create a C++ program that prints your name and age",
      },
      {
        id: "module2",
        title: "Yet another Introduction to C++",
        videoUrl: "https://youtu.be/ZlV4gJLz3fs?si=485sZon0YjgUo4fL",
        notes: ["Lorem Ipsum is true", "Lorem Ipsum is false"],
        code: '#include <iostream>\nusing namespace std;int main() {cout << "Hello, World!" << endl;return 0;}',
        quizzes: [
          {
            question:
              "What is the correct syntax to print 'Hello, World!' in C++?",
            options: [
              "print('Hello, World!');",
              "cout << 'Hello, World!';",
              "Console.WriteLine('Hello, World!');",
              "System.out.println('Hello, World!');",
            ],
            answer: "cout << 'Hello, World!';",
          },
          {
            question:
              "Which header file is required for input and output in C++?",
            options: ["stdio.h", "iostream", "stdlib.h", "conio.h"],
            answer: "iostream",
          },
          {
            question: "What is the entry point of a C++ program?",
            options: ["start()", "main()", "init()", "run()"],
            answer: "main()",
          },
          {
            question: 'What is the output of `cout << "1" + "2" << endl;`?',
            answer: "12",
          },
        ],
        task: "Create a C++ program that prints your name and age",
      },
    ],
  },
  {
    id: "python-basics",
    title: "Python Basics",
    language: "Python",
    imageUrl: "/kodi/python.jpg",
    description: "An introduction to Python programming",
    prerequisites: [
      "Basic computer usage skills",
      "Familiarity with basic coding concepts",
    ],
    what_you_learn: [
      "Write basic Python programs",
      "Understanding Python syntax and variables",
      "Functions, loops, and conditionals in Python",
    ],
    progress: 0,
    modules: [
      {
        id: "module1",
        title: "Introduction to Python",
        videoUrl: "https://youtu.be/_uQrJ0TkZlc",
        notes: [
          "Introduction to Python syntax",
          "Data types and variables in Python",
        ],
        code: 'print("Hello, World!")\nname = input("Enter your name: ")\nprint(f"Hello, {name}!")',
        quizzes: [
          {
            question: "Which function is used to output text in Python?",
            options: ["print()", "echo()", "output()", "println()"],
            answer: "print()",
          },
          {
            question:
              "What is the correct syntax to define a function in Python?",
            options: [
              "def function_name():",
              "function_name() ->",
              "define function_name():",
              "func function_name():",
            ],
            answer: "def function_name():",
          },
          {
            question:
              "What does the following code output? `x = 5\nprint(x + 3)`",
            answer: "8",
          },
        ],
        task: "Write a Python program that asks for the user's age and prints how old they will be in 5 years.",
      },
      {
        id: "module2",
        title: "Another Introduction to Python",
        videoUrl: "https://youtu.be/_uQrJ0TkZlc",
        notes: [
          "Introduction to Python syntax",
          "Data types and variables in Python",
        ],
        code: 'print("Hello, World!")\nname = input("Enter your name: ")\nprint(f"Hello, {name}!")',
        quizzes: [
          {
            question: "Which function is used to output text in Python?",
            options: ["print()", "echo()", "output()", "println()"],
            answer: "print()",
          },
          {
            question:
              "What is the correct syntax to define a function in Python?",
            options: [
              "def function_name():",
              "function_name() ->",
              "define function_name():",
              "func function_name():",
            ],
            answer: "def function_name():",
          },
          {
            question:
              "What does the following code output? `x = 5\nprint(x + 3)`",
            answer: "8",
          },
        ],
        task: "Write a Python program that asks for the user's age and prints how old they will be in 5 years.",
      },
    ],
  },
];

export const userCourses: Course[] = [];
