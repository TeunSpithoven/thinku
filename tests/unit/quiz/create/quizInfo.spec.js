import store from "@/store/index.js";
import { shallowMount } from "@vue/test-utils";
import QuizInfo from "@/components/quiz/QuizInfo.vue";

describe("QuizInfo.spec.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(QuizInfo, {
      global: {
        plugins: [store],
      },
    });
  });

  test("renders inputs", () => {
    const title = cmp.get('[id="titleInput"]');
    const description = cmp.get('[id="descriptionInput"]');

    expect(title.text()).toBe("");
    expect(description.text()).toBe("");
  });

  test("changes inputs", () => {
    const title = cmp.get('[id="titleInput"]');
    const description = cmp.get('[id="descriptionInput"]');

    title.setValue("title input test");
    description.setValue("description input test");

    expect(cmp.vm.title).toEqual("title input test");
    expect(cmp.vm.description).toEqual("description input test");
  });
});
