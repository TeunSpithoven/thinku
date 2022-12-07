import { mutations } from "@/store/modules/quizStore";

// TODO: move this into a beforeEach method
const state = {
  id: -1,
  userId: 1,
  title: "",
  description: "",
  image: "",
};

describe("quiz mutations", () => {
  it("updateCreateQuiz", () => {
    const data = {
      id: -1,
      userId: 200,
      title: "testtitle",
      description: "testdescription",
      image: "testimage",
    };

    mutations.updateCreateQuizInfo(state, data);

    expect(state.userId).toBe(200);
    expect(state.title).toBe('testtitle');
    expect(state.description).toBe('testdescription');
    expect(state.image).toBe('testimage');
  });
});
