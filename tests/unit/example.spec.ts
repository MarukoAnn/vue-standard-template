import { shallowMount } from '@vue/test-utils'
import HelloWord from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWord, {
            props: { msg },
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
