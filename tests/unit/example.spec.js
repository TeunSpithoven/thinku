import store from "@/store/index.js";
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      global: {
        plugins: [store],
      },
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
