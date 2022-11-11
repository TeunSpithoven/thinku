import store from "@/store/index.js";
import { shallowMount } from "@vue/test-utils";
import QuestionCard from "@/components/question/QuestionCard.vue";

describe("QuestionCard.spec.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(QuestionCard, {
      global: {
        plugins: [store],
      },
    });
  });

  test("renders add answer button", () => {
    const button = cmp.get('[id="addAnswerButton"]');

    expect(button.text()).toBe("Antwoord Toevoegen");
  });
});
