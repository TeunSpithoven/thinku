import store from '@/store/index.js'
import { mount } from '@vue/test-utils'
import QuizInfo from '@/components/quiz/QuizInfo.vue'

test('renders inputs', () => {
    const wrapper = mount(QuizInfo, {
        global: {
            plugins: [store]
        },
    })

    const title = wrapper.get('[id="titleInput"]')
    const description = wrapper.get('[id="descriptionInput"]')

    expect(title.text()).toBe('')
    expect(description.text()).toBe('')
})

test('fills title and description fields', () => {
    const wrapper = mount(QuizInfo, {
        global: {
            plugins: [store]
        },
    })

    wrapper.get('[id="titleInput"]').setValue('test title')
    wrapper.get('[id="descriptionInput"]').setValue('test description')

    const title = wrapper.get('[id="titleInput"]')
    const description = wrapper.get('[id="descriptionInput"]')

    expect(title.text()).toBe('')
    expect(description.text()).toBe('')
})