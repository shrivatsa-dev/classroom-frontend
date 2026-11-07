import type { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Programming",
    code: "CS101",
    department: "Computer Science",
    description:
      "An introduction to programming concepts and problem-solving using Python. Topics include variables, control flow, functions, and basic data structures.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Calculus I",
    code: "MATH201",
    department: "Mathematics",
    description:
      "A study of differential and integral calculus, covering limits, derivatives, integrals, and their real-world applications in science and engineering.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Classical Mechanics",
    code: "PHY301",
    department: "Physics",
    description:
      "Covers the fundamentals of classical mechanics including Newton's laws of motion, energy, momentum, rotational dynamics, and gravitational fields.",
   createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Business Fundamentals",
    code: "BUS102",
    department: "Business Administration",
    description:
      "An overview of core business principles including organizational behavior, marketing strategies, financial planning, and entrepreneurial thinking.",
   createdAt: new Date().toISOString(),
  },
];
