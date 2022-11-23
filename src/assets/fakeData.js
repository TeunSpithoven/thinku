const createQuiz = {
  id: 1,
  userId: 1,
  title: "Nieuwe quiz",
  description: "een super coole quiz",
  image: "",
  questions: [
    {
      question: "Is dit de eerste vraag?",
      type: "goedfout",
      time: 20,
      number: 1,
      answers: [
        {
          number: 1,
          answer: "ja",
          isCorrect: true,
        },
        {
          number: 2,
          answer: "nee",
          isCorrect: false,
        },
      ],
    },
  ],
};

const quizzes = [
  createQuiz,
  {
    userId: 1,
    title: "Thinku Quiz",
    description: "een over deze app",
    image: "",
    questions: [
      {
        question: "Wat is de naam van deze app?",
        type: "open",
        time: 20,
        number: 1,
        answers: [
          {
            number: 1,
            answer: "thinku",
            isCorrect: true,
          },
        ],
      },
    ],
  },
];

export { createQuiz, quizzes };
