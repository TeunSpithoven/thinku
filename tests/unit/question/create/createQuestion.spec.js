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

  test("renders question info", () => {
    const info = cmp.get('[id="quesionInfoContainter"]');
    
    expect(info).toBeDefined();
  });
  test("renders answer list", () => {
    const answers = cmp.get('[id="answers"]');
    
    expect(answers).toBeDefined();
  });
});
