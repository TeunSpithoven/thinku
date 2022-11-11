import store from "@/store/index.js";
import { shallowMount } from "@vue/test-utils";
import ImageUpload from "@/components/inputs/ImageInput.vue";

describe("QuizInfo.spec.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(ImageUpload, {
      global: {
        plugins: [store],
      },
    });
  });

  test("renders inputs", () => {
    const title = cmp.get('[id="imageInput"]');

    expect(title.text()).toBe("");
  });

//   test("changes inputs", () => {
//     const image = cmp.get('[id="imageInput"]');

//     image.setValue("title input test");

//     expect(cmp.vm.previewImage).toEqual("title input test");
//   });
});
