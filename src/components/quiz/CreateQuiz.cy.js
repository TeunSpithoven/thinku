import CreateQuiz from './CreateQuiz.vue'

describe('<CreateQuiz />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(CreateQuiz)
  })
})