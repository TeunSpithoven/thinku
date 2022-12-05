// import store from "@/store/index.js";
// import { shallowMount } from "@vue/test-utils";
// import QuestionCard from "@/components/question/QuestionCard.vue";
// import AnswerCard from '@/components/answer/AnswerCard.vue';

// TODO: misschien moeten alle bovenliggende componenenten ook al mounted zijn zoals answerlist enzo

// describe("AnswerCard.spec.js", () => {
//   let cmp;
//   beforeEach(() => {
//     shallowMount(QuestionCard, {
//       global: {
//         plugins: [store],
//       },
//     });
//     cmp = shallowMount(AnswerCard, {
//       global: {
//         plugins: [store],
//       },
//     });
//   });

//   test("renders buttons and inputs", () => {
//     const isCorrectButton = cmp.get('[id="isCorrectButton"]');
//     const answerInput = cmp.get('[id="answerInput"]');
//     const deleteButtton = cmp.get('[id="deleteButtton"]');

//     expect(isCorrectButton.text()).toBe("");
//     expect(answerInput.text()).toBe("");
//     expect(deleteButtton.text()).toBe("");
//   });
// });
