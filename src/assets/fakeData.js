const createQuiz = {
  userId: 1,
  title: "Nieuwe quiz",
  description: "een super coole quiz",
  giphyUrl: "",
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
    {
      question: "Is dit de eerste vraag?",
      type: "goedfout",
      time: 20,
      number: 2,
      answers: [
        {
          number: 1,
          answer: "ja",
          isCorrect: false,
        },
        {
          number: 2,
          answer: "nee",
          isCorrect: true,
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
    giphyUrl: "",
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
