import store from '@/store/index.js'
import { mount } from '@vue/test-utils'
import ImageUpload from '@/components/inputs/ImageInput.vue'

test('renders input', () => {
    const wrapper = mount(ImageUpload, {
        global: {
            plugins: [store]
        },
    })

    const image = wrapper.get('[id="imageInput"]')

    expect(image.text()).toBe('')
})