import { mutations } from "@/store/modules/questionStore";

// TODO: move this into a beforeEach method
const state = {
    questions: [],
    id: 1,
    renderQuestions: true,
    dragQuestions: false,
};

describe("question mutations", () => {
  it("addQuestion", () => {
    const question = {
      id: -1,
      userId: 200,
      title: "testtitle",
      description: "testdescription",
      image: "testimage",
      
      id: state.id,
        quizId: question.quizId,
        number: question.number,
        question: question.question,
        type: question.type,
        time: question.time,
    };

    mutations.addQuestion(state, question);

    expect(state.userId).toBe(200);
    expect(state.title).toBe('testtitle');
    expect(state.description).toBe('testdescription');
    expect(state.image).toBe('testimage');
  });
});
