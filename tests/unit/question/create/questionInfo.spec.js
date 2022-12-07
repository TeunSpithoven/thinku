import store from "@/store/index.js";
import { shallowMount } from "@vue/test-utils";
import QuestionInfo from "@/components/question/QuestionInfo.vue";

describe("QuestionInfo.spec.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(QuestionInfo, {
      global: {
        plugins: [store],
      },
    });
  });

  test("renders labels", () => {
    const button = cmp.get('[id="labels"]');

    expect(button.text()).toContain("Type");
    expect(button.text()).toContain("Vraag");
    expect(button.text()).toContain("Tijd");
    expect(button.text()).toContain("");
    expect(button.text()).not.toContain("huts");
  });

  test("renders inputs", () => {
    const title = cmp.get('[id="title"]');
    const time = cmp.get('[id="time"]');
    const del = cmp.get('[id="delete"]');

    expect(title.text()).toBe("");
    expect(time.text()).toBe("");
    expect(del.text()).toBe("");
  })

  test("title input", () => {
    const title = cmp.get('[id="titleInput"]');

    title.setValue("title input test");

    expect(cmp.vm.questionData).toEqual("title input test");
  })
});
